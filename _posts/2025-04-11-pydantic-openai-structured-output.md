---
layout: post
title: "使用Pydantic数据类生成OpenAI结构化输出格式"
tagline: "简化AI应用开发，提高代码质量"
categories: python openai pydantic
image: /thumbnail-mobile.png
author: "Gusen"
---

# 使用Pydantic数据类生成OpenAI结构化输出格式

Pydantic作为Python中强大的数据验证库，与OpenAI的结构化输出功能结合使用可以大幅提高AI应用的开发效率。本文将详细介绍如何通过一个实用函数将Pydantic模型转换为OpenAI的响应格式规范。

## Pydantic与OpenAI结构化输出的结合

OpenAI的API支持结构化输出，使AI能够返回符合预定义格式的JSON数据。而Pydantic则是一个优秀的数据验证框架，两者结合可以实现：

- 在Python代码中定义数据模型
- 自动将模型转换为OpenAI可理解的JSON Schema
- 确保AI返回的数据符合预期结构

## 核心转换函数

以下是将Pydantic模型转换为OpenAI结构化输出格式的函数：

```python
def generate_response_format(model: Type[BaseModel], description: str = "") -> Dict[str, Any]:
    if not issubclass(model, BaseModel):
        raise ValueError("Input must be a subclass of BaseModel")

    schema = model.schema()

    if "additionalProperties" not in schema:
        schema["additionalProperties"] = False

    definitions = schema.get("definitions", {})
    for definition in definitions.values():
        if "type" in definition and definition["type"] == "object" and "additionalProperties" not in definition:
            definition["additionalProperties"] = False
        for property in definition["properties"].values():
            if property.get("nullable", False):
                if isinstance(property["type"], list):
                    property["type"].append("null")
                else:
                    property["type"] = [property["type"], "null"]

    return {
        "type": "json_schema",
        "json_schema": {
            "name": model.__name__.lower(),
            "schema": {
                "title": model.__name__,
                "description": description if description else "",
                "type": "object",
                "properties": schema.get("properties", {}),
                "required": schema.get("required", []),
                "additionalProperties": schema.get("additionalProperties", False),
                "definitions": definitions if definitions else {},
            },
        },
    }
```

## 函数特点解析

此函数实现了几个关键功能：

1. 验证输入是否为Pydantic模型
2. 自动获取模型的JSON Schema定义
3. 确保额外属性被适当限制
4. 处理可空字段，使其在Schema中正确表示
5. 构建符合OpenAI要求的响应格式结构

## 实际应用示例

### 示例1：简单嵌套模型

```python
from pydantic import BaseModel
from typing import List

class BaseStory(BaseModel):
    title: str
    content: str

class StoryList(BaseModel):
    story: List[BaseStory]

schema_output = generate_response_format(StoryList, description="故事列表的结构定义")
print(json.dumps(schema_output, indent=4))
```

### 示例2：复杂嵌套模型

```python
from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional

class RESTRequest(BaseModel):
    base_url: Optional[str] = Field(
        default="DATAFABRIC_SERVICE_URL",
        description="请求的基础URL"
    )
    endpoint: str = Field(
        ...,
        description="请求的具体端点"
    )
    params: Optional[Dict[str, Any]] = Field(
        None,
        description="可选的查询参数",
        nullable=True
    )
    data: Optional[Dict[str, Any]] = Field(
        None,
        description="可选的数据负载",
        nullable=True
    )
    method: str = Field(
        default="POST",
        description="HTTP请求方法",
        enum=["GET", "POST", "PUT", "DELETE", "PATCH"]
    )

class RESTRequestsList(BaseModel):
    requests: List[RESTRequest] = Field(
        ...,
        description="REST请求列表"
    )

    class Config:
        schema_extra = {
            "additionalProperties": False
        }

schema_output = generate_response_format(
    RESTRequestsList,
    description="REST请求列表的结构定义"
)
print(json.dumps(schema_output, indent=4))
```

## 与OpenAI API集成

生成响应格式后，可以直接在OpenAI API调用中使用：

```python
import openai

client = openai.OpenAI()
response = client.chat.completions.create(
    model="gpt-4-turbo",
    response_format=generate_response_format(StoryList),
    messages=[
        {"role": "system", "content": "你是一个故事生成器"},
        {"role": "user", "content": "请生成一个关于太空探险的故事"}
    ]
)

# 解析响应
story_data = response.choices[0].message.content
# 使用Pydantic验证和处理
stories = StoryList.parse_raw(story_data)
```

## 总结

通过将Pydantic与OpenAI结构化输出结合，我们能够：

1. 使用熟悉的Python类定义API响应结构
2. 自动生成符合OpenAI要求的JSON Schema
3. 轻松验证和处理AI返回的数据
4. 在开发过程中获得更好的类型提示和文档

这种方法极大地简化了AI应用开发流程，提高了代码质量和可维护性。 