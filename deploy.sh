#!/bin/bash

# 포트 3400을 사용하는 프로세스 종료
pid=$(lsof -ti:3400)
if [ -n "$pid" ]; then
  kill -9 $pid
  echo "Killed process(es) with PID(s): $pid"
fi

# Next.js 애플리케이션 빌드
npm run build

# Next.js 애플리케이션 시작
npm run start