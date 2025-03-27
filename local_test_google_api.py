#!/usr/bin/env python3
"""
本地测试Google Indexing API的脚本
使用方法：
1. 确保已安装所需库：pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib
2. 将service_account.json放在脚本同目录下
3. 运行脚本：python local_test_google_api.py
"""

import os
import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def test_google_indexing():
    # 检查service_account.json是否存在
    if not os.path.exists('service_account.json'):
        print("错误：未找到service_account.json文件")
        print("请确保service_account.json文件位于脚本同目录下")
        return

    try:
        # 读取服务账号密钥
        with open('service_account.json', 'r') as f:
            key_json = json.load(f)
        
        # 创建凭据
        credentials = service_account.Credentials.from_service_account_file(
            'service_account.json',
            scopes=['https://www.googleapis.com/auth/indexing']
        )
        
        print(f"使用服务账号: {credentials.service_account_email}")
        
        # 构建索引服务
        service = build('indexing', 'v3', credentials=credentials)
        
        # 测试URL
        test_url = "https://gusen1453.github.io/posts/2025/03/macro-factors/"
        
        print(f"\n测试提交URL: {test_url}")
        
        # 请求索引
        response = service.urlNotifications().publish(
            body={"url": test_url, "type": "URL_UPDATED"}
        ).execute()
        
        print(f"提交成功: {response}")
        
    except HttpError as e:
        if e.resp.status == 403:
            print(f"权限错误: 请确保服务账号 {credentials.service_account_email} 已获得网站所有权验证")
            print("请在Google Search Console中验证网站所有权")
            print(f"错误详情: {str(e)}")
        else:
            print(f"API错误: {str(e)}")
    except Exception as e:
        print(f"发生错误: {str(e)}")

if __name__ == "__main__":
    print("开始本地测试Google Indexing API...")
    test_google_indexing()
    print("测试完成") 