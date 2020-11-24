# ベースイメージ
FROM node:14.4.0-alpine

# 変数 ルートディレクトリ
ARG WORKDIR

#　変数 ポート番号
ARG CONTAINER_PORT

# 変数 APIURL
ARG API_URL

# 環境変数
ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0

# ベースイメージへの命令
RUN echo ${HOME}
RUN echo ${CONTAINER_PORT}
RUN echo ${API_URL}

# 作業ディレクトリの指定
WORKDIR ${HOME}

# ポート番号の指定
EXPOSE ${CONTAINER_PORT}
