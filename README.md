# MediaXPost Specifications
Intended to allow media to be posted on multiple media (e.g. art/writing/audio/social) networks at once with ease.

## Free Features
* Chrome / FireFox Extension
* Social Networks (Link to Post from a Network) -- Twitter, Tumblr
* Art Networks -- FurAffinity, InkBunny, SoFurry, FurryNetwork, Weasyl, DeviantArt
* Writing Networks -- Calameo, HashDoc, DocDroid
* Audio Networks -- Soundcloud, BandCamp, MixCloud, 8Tracks
* Video Networks -- YouTube, Vimeo

## Premium Features ( $2.00 upgrade )
 * Live Stream Announcer
 * Post History
 * Scheduled Posts
 * Media Library Migration Tools

## Architecture
### Client Side
 * Browser Extension -- Modal Window App with Closure
 * Bootstrap.js (http://getbootstrap.com/javascript/)
 * Angular2 (https://angular.io/docs/ts/latest/quickstart.html) -- This is to allow Cordova mobile apps as well.
## Server Side Support
 * Ruby on Rails REST API
 * Database - Postgres SQL(?)
   * Users
   * Users-Entitlements (Premium)
   * Users-History (Premium)
   * Account tracking across different site spaces (UserA @ FA = UserA1 @ FN)

## Network Capabilities

**Core**

| Network | Embedding<sup>1</sup> | Embedded<sup>2</sup> |  Ext. Link<sup>3</sup> |
| ------- |:---------:|:--------:|:------:|
| Twitter      | N | Y<sup>★</sup> | Y |
| Tumblr       | Y | Y<sup>★</sup> | Y |
| FurAffinity  | N | N | * |
| InkBunny     | N | N | * |
| SoFurry      | N | N | * |
| FurryNetwork | N | Y<sup>★</sup> | * |
| Weasyl       | N | Y<sup>★</sup> | * |
| DeviantArt   | N | ? | * |
| Calameo      | Y | ? | * |
| DocDroid     | Y | ? | * |
| HashDoc      | Y | ? | * |
| SoundCloud   | Y | N | * |
| BandCamp     | Y | N | * |
| MixCloud     | Y | N | * |
| 8Tracks      | Y | N | * |
| YouTube      | Y | N | * |
| Vimeo        | Y | N | * |

**Upload**

| Network | Media Type(s) | File Format(s) | Size Limit | Storage Limit |
| ------- |:-------------:|:--------------:|:----------:|:-------------:|
| Twitter      | Video, Art, Audio, Embedded | - | - | - |
| Tumblr       | Video, Art, Audio, Embedded | - | - | - |
| FurAffinity  | Writing, Video, Art, Audio | - | - | - |
| InkBunny     | Writing, Video, Art, Audio | - | - | - |
| SoFurry      | Writing, Video, Art, Audio | - | - | - |
| FurryNetwork | Writing, Video, Art, Audio, Embedded- | - | - | - |
| Weasyl       | Writing, Video, Art, Audio | - | - | - |
| DeviantArt   | Writing, Video, Art, Audio | H.264, MPEG4, WebM, FLV, WMV, WMA, OGG, MP3, MP4, M4A, M4V, F4V, F4A, M4B, M4R, F4B, MOV, PNG, JPG, BMP, TXT | 64 kb Text / 30 Mb Images / 200 Mb Media  | 2 Gb |
| Calameo      | Writing | PDF, DOCX, DOC, ODT, RTF, XLS, XLSX, ODS, PPT, PPTX, ODP, TXT | 100 Mb | 15 Gb |
| DocDroid     | Writing | PDF, DOCX, DOC, ODT, RTF, XLS, XLSX, ODS, PPT, PPTX, ODP, TXT | - | - |
| HashDoc      | Writing | CSV, DOC, DOCM, DOCX, DOT, DXF, ODF, PDF, PPS, PPT, PPTX, RTF, SVG, TXT, XLS, XLSM, XLSX, XLT | 150 Mb | ∞ |
| SoundCloud   | Audio   | AIFF, WAV, FLAC, ALAC, OGG, MP2, MP3, AAC, AMR, WMA | 5 Gb | 2 Hours of Audio |
| BandCamp     | Audio   | WAV, AIFF, FLAC | 291 Mb | ∞ |
| MixCloud     | Audio   | MP3, AAC, M4A, MP4 | ∞ | ∞ |
| 8Tracks      | Audio   | MP3, M4A, AAC, MP4 | 50 Mb | ∞ |
| YouTube      | Video   | MOV, MP4 (MPEG4), AVI, WMV, FLV, 3GP, MPEGPS, WebM | 2 Gb | ∞ |
| Vimeo        | Video   | https://vimeo.com/help/compression | Up to 500 Mb (Basic) | 500 Mb |

**APIs**

| Network | API | API Upload Support? |
| ------- | --- | --------------- |
| Twitter      | https://dev.twitter.com/rest/public | Y - https://dev.twitter.com/rest/media/uploading-media |
| Tumblr       | https://www.tumblr.com/docs/en/api/v2 | Y - https://www.tumblr.com/docs/en/api/v2#posting |
| FurAffinity  | FA does not have API. Existing browser session must be used with direct network call within an IFRAME (the main reason for this being a browser extension) | N<sup>†</sup> |
| InkBunny     | https://wiki.inkbunny.net/wiki/API | Y -- https://wiki.inkbunny.net/wiki/API#Submission_Details |
| SoFurry      | https://wiki.sofurry.com/wiki/SoFurry_2.0_API | Y -- https://wiki.sofurry.com/wiki/Submission_Upload_JSON_API |
| FurryNetwork | FN has a public API that is not documented, they encourage using the REST API -- JSON endpoints | N<sup>†</sup> |
| Weasyl       | https://projects.weasyl.com/weasylapi/ | N -- Weasyl's API is Read Only<sup>†</sup> |
| DeviantArt   | https://www.deviantart.com/developers/ | Y -- https://www.deviantart.com/developers/http/v1/20160316/stash_publish/a799a5c0967dca14e854286df9746793 |
| Calameo      | http://help.calameo.com/index.php?title=API:Introduction | Y - Publish Endpoints |
| DocDroid     | No API | N<sup>†</sup> |
| HashDoc      | No API | N<sup>†</sup> |
| SoundCloud   | https://developers.soundcloud.com/docs/api/guide | Y - https://developers.soundcloud.com/docs/api/guide#uploading |
| BandCamp     | https://bandcamp.com/developer | N - BandCamp's API is for updating merch and band information only<sup>†</sup> |
| MixCloud     | https://www.mixcloud.com/developers/ | Y - https://www.mixcloud.com/developers/#uploads |
| 8Tracks      | https://8tracks.com/developers/api_v3 | N<sup>†</sup> - Doesn't support creating a "Mix" programmatically |
| YouTube      | https://developers.google.com/youtube/v3/getting-started | Y - https://developers.google.com/youtube/v3/guides/uploading_a_video |
| Vimeo        | https://developer.vimeo.com/ | Y - https://developer.vimeo.com/api/start#upload-api |

 * 1 - Supports allowing this content to be shared by being embedded in another site.
 * 2 - Supports embedded content from other sites.
 * 3 - Supports external links to other content.
 * ★ - Media Sites available are limited in scope
 * † - This necessitates a network capture to discover how transfers are done

## Form Data
FurAffinity

Twitter - Tweet
