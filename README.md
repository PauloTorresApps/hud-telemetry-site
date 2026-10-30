# HUD Telemetry

🌐 **Site:** https://paulotorresapps.github.io/hud-telemetry-site/

[Português](#português) · [English](#english)

---

## Português

Aplicativo desktop gratuito que desenha velocidade, altitude, inclinação e trajeto
sobre o seu vídeo, sincronizados com os dados GPS do Strava, de um arquivo GPX ou
da telemetria gravada pela GoPro.

### Download

Baixe o instalador do seu sistema na página de
[Releases](https://github.com/PauloTorresApps/hud-telemetry-site/releases/latest).

### Instalação no Linux

**.deb (Debian / Ubuntu e derivados)**: use o `apt` para que as dependências,
incluindo o FFmpeg, sejam instaladas automaticamente:

```bash
sudo apt install ./hud-telemetry_<versao>_amd64.deb
```

> Evite `sudo dpkg -i`: ele não baixa as dependências. Se já usou e o app não
> abre, rode `sudo apt-get install -f`.

**.rpm (Fedora / RHEL e derivados)**

```bash
sudo dnf install ./hud-telemetry-<versao>-1.x86_64.rpm
```

**AppImage (maioria das distribuições)**: não instala nada no sistema:

```bash
chmod +x HUD_Telemetry-<versao>-x86_64.AppImage
./HUD_Telemetry-<versao>-x86_64.AppImage
```

> Se o FFmpeg não estiver instalado, o AppImage o baixa automaticamente na
> primeira execução, para `~/.hud-telemetry/bin/`.

**Snap**: fica fora da Snap Store e roda em modo de desenvolvimento:

```bash
sudo snap install --dangerous --devmode ./hud-telemetry_<versao>_amd64.snap
```

### Windows e macOS

Instale o [FFmpeg](https://ffmpeg.org/download.html) (no macOS: `brew install ffmpeg`;
no Windows, adicione-o ao PATH).

- **Windows:** execute o instalador (`hud-telemetry-…-installer.exe`). Se o SmartScreen
  avisar que o app não é reconhecido, clique em **Mais informações → Executar
  assim mesmo**.
- **macOS** (Intel e Apple Silicon): descompacte
  `hud-telemetry-<versao>-macos-universal.zip` e arraste `hud-telemetry.app`
  para Aplicativos. O app não é assinado pela Apple; se o macOS bloquear a
  abertura, rode uma vez:

  ```bash
  xattr -dr com.apple.quarantine /Applications/hud-telemetry.app
  ```

### Primeiro uso

1. Crie uma aplicação gratuita em https://www.strava.com/settings/api e copie o
   **Client ID** e o **Client Secret**.
2. Abra o HUD Telemetry e informe esses dados na tela de configuração. Eles ficam
   salvos apenas no seu computador, em `~/.hud-telemetry/config.json`.
3. Clique em **Conectar com Strava**, escolha a atividade e o vídeo, sincronize
   clicando no mapa e clique em **Processar com Overlay**.

Você também pode importar um arquivo **GPX** ou abrir um vídeo da **GoPro** com
GPS: o app lê a telemetria gravada no próprio arquivo.

> **Usava o Strava Overlay?** O HUD Telemetry é o mesmo app com nome novo. Na
> primeira execução, ele move suas configurações e o login de
> `~/.strava-overlay` para `~/.hud-telemetry`. No Linux, o pacote novo substitui
> o antigo `strava-overlay`.

### Problemas comuns

- **FFmpeg não encontrado:** confira com `ffmpeg -version` e reabra o app.
- **Sincronização errada:** clique com mais precisão no ponto do mapa onde o
  vídeo começou e use um vídeo sem cortes da mesma atividade.

---

## English

A free desktop app that draws speed, altitude, grade and route on top of your
video, in sync with GPS data from Strava, a GPX file or GoPro telemetry.

### Download

Get the installer for your system from
[Releases](https://github.com/PauloTorresApps/hud-telemetry-site/releases/latest).

### Linux

```bash
# Debian / Ubuntu (installs FFmpeg and other dependencies)
sudo apt install ./hud-telemetry_<version>_amd64.deb

# Fedora / RHEL
sudo dnf install ./hud-telemetry-<version>-1.x86_64.rpm

# AppImage (any distro; downloads FFmpeg on first run if missing)
chmod +x HUD_Telemetry-<version>-x86_64.AppImage && ./HUD_Telemetry-<version>-x86_64.AppImage

# Snap (outside the Snap Store, devmode)
sudo snap install --dangerous --devmode ./hud-telemetry_<version>_amd64.snap
```

### Windows and macOS

Install [FFmpeg](https://ffmpeg.org/download.html) (macOS: `brew install ffmpeg`;
Windows: add it to PATH).

- **Windows:** run the installer (`hud-telemetry-…-installer.exe`). If SmartScreen says the
  app isn't recognized, click **More info → Run anyway**.
- **macOS** (Intel and Apple Silicon): unzip
  `hud-telemetry-<version>-macos-universal.zip` and drag `hud-telemetry.app`
  to Applications. The app isn't signed by Apple; if macOS blocks it, run once:

  ```bash
  xattr -dr com.apple.quarantine /Applications/hud-telemetry.app
  ```

### First run

1. Create a free app at https://www.strava.com/settings/api and copy the
   **Client ID** and **Client Secret**.
2. Open HUD Telemetry and enter them on the setup screen. They are stored only
   on your computer, in `~/.hud-telemetry/config.json`.
3. Click **Connect with Strava**, pick the activity and the video, sync by
   clicking the map and click **Process with Overlay**.

You can also import a **GPX** file or open a **GoPro** video with GPS: the app
reads the telemetry recorded inside the file.

> **Used Strava Overlay?** HUD Telemetry is the same app under a new name. On
> first run it moves your settings and login from `~/.strava-overlay` to
> `~/.hud-telemetry`. On Linux, the new package replaces the old
> `strava-overlay` one.

---

© Paulo Roberto Torres
