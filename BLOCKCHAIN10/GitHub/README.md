# Github

git

원격저장소

커밋을 올려주는곳

1. Repo 만들기

2. Repo에 Commit 올리기 2. 내가 만든 저장소는 나만 올려야 합니다
   내가 나임을 어떻게 증명하는가?
   인터넷에서는 ID/PW
3. 내가 나임을 증명하는 방법중 'Token' 이라는 방법으로 사용을 할겁니다.

   토큰 -> 임의의 키 값이다.

4. 토큰을 저장하는 공간

`OS`

KEYCHAIN

자격증명

git 자체에서도 존재하기는 합니다

```sh
cd ~
mkdir github
cd github

git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager-core.exe"

git config --list



C:\\Program Files\\Git\\mingw64\\libexec\\git-core\\git-credential


```

## github connection

```sh

// origin은 그냥 이름임 aa 써도 됨
git remote add origin [주소]
git push -u origin main

```

```sh
git remote
git push
git pull :
git clone


pull 은 내가 내로컬에 .git이 존재할 경우

git clone 저장소 자체를 그대로 가져오는 것
```
