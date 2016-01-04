# Overcast.fm for Desktop
[![Build Status](https://travis-ci.org/xasos/overcast-desktop.svg?branch=master)](https://travis-ci.org/xasos/overcast-desktop)

Cross-platform desktop application for [Overcast](http://overcast.fm/) using Electron + Node.js. Includes support for Mac OS X Media Keys.

![Screenshot](https://raw.githubusercontent.com/xasos/overcast-desktop/master/assets/overcast-screenshot.png)

## Media Key Support
- <kbd>>||</kbd> - Play/Pause
- <kbd>&lt;&lt;</kbd> - Rewind 30s
- <kbd>&gt;&gt;</kbd> - Skip forward 30s

## Download
Latest release for Mac OS X, Linux, and Windows available [here](https://github.com/xasos/overcast-desktop/releases). To keep the download size of Overcast down, the binary has been tarred. To untar, run
```sh
$ tar -zxvf overcast-<platform>-x64.tar.gz          # Substitute <platform> with platform of choice
# Proceed to move into Applications folder
```

## Building `overcast-desktop`
```sh
$ git clone https://github.com/xasos/overcast-desktop.git
$ cd overcast-desktop
$ npm install
$ npm start
# To build for a specific platform (darwin, linux, win32)
$ npm build <platform>       
```

## Patronage
If you love Overcast, I'd highly recommend [helping support the app](https://overcast.fm/skeptics_faq) - [Marco](https://marco.org/) offers Overcast for free and puts a lot of time and effort into building it.

## License
[MIT License](LICENSE)
