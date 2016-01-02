# Overcast.fm for Desktop
[![Build Status](https://travis-ci.org/xasos/overcast-desktop.svg?branch=master)](https://travis-ci.org/xasos/overcast-desktop)

Cross-platform desktop application for [Overcast](http://overcast.fm/) using Electron + Node.js. Includes support for Mac Media Keys.

![Screenshot](https://raw.githubusercontent.com/xasos/overcast-desktop/master/assets/overcast-screenshot.png)

## Media Key Support
- <kbd>>||</kbd> - Play/Pause
- <kbd>&lt;&lt;</kbd> - Rewind 30s
- <kbd>&gt;&gt;</kbd> - Skip forward 30s

## Building `overcast-desktop`
```sh
$ npm install
$ npm start
# To build for a specific platform
$ npm build <platform>
```

## Download
Latest release for Mac and Linux available [here](https://github.com/xasos/overcast-desktop/releases). After download, run
```sh
$ tar -zxvf overcast-<platform>-x64.tar.gz          # Swap <platform> with downloaded release name
```

## Contributing
All contributions welcome!

## Donations
If you love Overcast, I'd highly recommend [donating to the creator](https://overcast.fm/skeptics_faq) - [Marco](https://marco.org/) puts a lot of time and effort into building such a beautiful application, and offers it completely free.

## License
[MIT License](LICENSE)
