# MediaXPost Specifications
Intended to allow media to be posted on multiple media (e.g. art/writing/audio/social) networks at once with ease.

## Free Features
 * Chrome / FireFox Extension
 * Drag and Drop Files from local media (https://css-tricks.com/drag-and-drop-file-uploading/)
 * Media location -- Local File, Google Drive, DropBox
 * Social Networks (Link to Post from a Network) -- Twitter, Tumblr
 * Art Networks -- FurAffinity, InkBunny, SoFurry, FurryNetwork, Weasyl, DeviantArt
 * Writing Networks -- Calameo, HashDoc, DocDroid
 * Audio Networks -- Soundcloud, BandCamp, MixCloud, 8Tracks
 * Video Networks -- YouTube, Vimeo

## Plus Features ( $2/m | $20/yr )
 * +Free Features
 * Live Stream Announcer
 * Post History

## Premium Features ( $5/m | $50/yr )
 * +Plus Features
 * Scheduled Posts
 * Media Library Import/Migration/Management Tools
  * Requires downloading and reading submission details

## Architecture
### Client Side
 * Browser Extension -- Modal Window App with Closure
 * Bootstrap.js (http://getbootstrap.com/javascript/)
 * Angular2 (https://angular.io/docs/ts/latest/quickstart.html) -- This is to allow Cordova mobile apps as well.

## Server Side Support
 * Ruby on Rails REST API
 * Database - Postgres SQL(?) (Do not use a NoSQL database for this)
   * Users
   * Users-Entitlements (Premium)
   * Users-History (Premium)
   * Account tracking across different site spaces (UserA @ FA = UserA1 @ FN)

## Network Capabilities

### Core

| Network | Embedding<sup>1</sup> | Embedded<sup>2</sup> | Ext. Link<sup>3</sup> |
| ------- |:---------------------:|:--------------------:|:---------------------:|
| Twitter      | N | Y<sup>★</sup> | Y |
| Tumblr       | Y | Y<sup>★</sup> | Y |
| FurAffinity  | N | N | * |
| InkBunny     | N | N | * |
| SoFurry      | N | N | * |
| FurryNetwork | N | Y<sup>★</sup> | * |
| Weasyl       | N | N | * |
| DeviantArt   | N | N | * |
| Calameo      | Y | N | * |
| DocDroid     | Y | N | * |
| HashDoc      | Y | N | * |
| SoundCloud   | Y | N | * |
| BandCamp     | Y | N | * |
| MixCloud     | Y | N | * |
| 8Tracks      | Y | N | * |
| YouTube      | Y | N | * |
| Vimeo        | Y | N | * |

* 1 - Supports allowing this content to be shared by being embedded in another site
* 2 - Supports embedded content from other sites
* 3 - Supports external links to other content
* ★ - Media Sites available are limited in scope

### Upload

#### Visual Media
| Network | File Format(s) | Size Limit | Storage Limit | Thumbnail |
| ------- |:--------------:|:----------:|:-------------:|:---------:|
| Twitter      | - | - | - |
| Tumblr       | - | - | - |
| FurAffinity  | - | - | - |
| InkBunny     | - | - | - |
| SoFurry      | - | - | - |
| FurryNetwork | - | - | - |
| Weasyl       | JPG PNG GIF | 10 Mb | ∞ | Y |
| DeviantArt   | PNG, JPG, BMP | 30 Mb | 2 Gb | N |

#### Audio Media (Music/Sound)
| Network | File Format(s) | Size Limit | Storage Limit | Cover Art |
| ------- |:--------------:|:----------:|:-------------:|:---------:|
| Twitter      | - | - | - | - |
| Tumblr       | - | - | - | - |
| FurAffinity  | - | - | - | - |
| InkBunny     | - | - | - | - |
| SoFurry      | - | - | - | - |
| FurryNetwork | - | - | - | - |
| Weasyl       | MP3 | 15Mb | ∞ | Y |
| DeviantArt   | OGG, MP3, MP4, M4A | 200 Mb | 2 Gb | N |
| SoundCloud   | AIFF, WAV, FLAC, ALAC, OGG, MP2, MP3, AAC, AMR, WMA | 5 Gb | 2 Hours of Audio | Y |
| BandCamp     | WAV, AIFF, FLAC | 291 Mb | ∞ | * |
| MixCloud     | MP3, AAC, M4A, MP4 | ∞ | ∞ | * |
| 8Tracks      | MP3, M4A, AAC, MP4 | 50 Mb | ∞ | * |

#### Multi Media (Video)
| Network | File Format(s) | Size Limit | Storage Limit | Cover Art |
| ------- |:--------------:|:----------:|:-------------:|:---------:|
| Twitter      | - | - | - | - |
| Tumblr       | - | - | - | - |
| FurAffinity  | - | - | - | - |
| InkBunny     | - | - | - | - |
| SoFurry      | - | - | - | - |
| FurryNetwork | - | - | - | - |
| Weasyl       | SWF | 15 Mb | ∞ | Y |
| DeviantArt   | H.264, MPEG4, WebM, FLV, WMV, WMA | 200 Mb Media  | 2 Gb | N |
| YouTube      | MOV, MP4 (MPEG4), AVI, WMV, FLV, 3GP, MPEGPS, WebM | 2 Gb | ∞ | Y |
| Vimeo        | https://vimeo.com/help/compression | Up to 500 Mb (Basic) | 500 Mb | N |

#### Literary Media
| Network | File Format(s) | Size Limit | Storage Limit | Cover Art |
| ------- |:--------------:|:----------:|:-------------:|:---------:|
| Weasyl       | TXT MD PDF | 2/2/10 Mb | ∞ | Y |
| DeviantArt   | TXT | 200 Mb Media  | 64 kb | N |
| Calameo      | PDF, DOCX, DOC, ODT, RTF, XLS, XLSX, ODS, PPT, PPTX, ODP, TXT | 100 Mb | 15 Gb |
| DocDroid     | PDF, DOCX, DOC, ODT, RTF, XLS, XLSX, ODS, PPT, PPTX, ODP, TXT | - | - |
| HashDoc      | CSV, DOC, DOCM, DOCX, DOT, DXF, ODF, PDF, PPS, PPT, PPTX, RTF, SVG, TXT, XLS, XLSM, XLSX, XLT | 150 Mb | ∞ |

#### Embedded Media
| Network | Supported Media Networks |
| ------- | ------------------------ |
| Twitter      | - |
| Tumblr       | - |
| FurryNetwork | - |

### APIs

#### Core

| Network | API |
| ------- | --- |
| DropBox      | https://www.dropbox.com/developers |
| Google Drive | https://developers.google.com/drive/v2/reference/ |
| Twitter      | https://dev.twitter.com/rest/public |
| Twitter      | https://dev.twitter.com/rest/public |
| Tumblr       | https://www.tumblr.com/docs/en/api/v2 |
| FurAffinity  | FA does not have API. Existing browser session must be used with direct network call within an IFRAME (the main reason for this being a browser extension) |
| InkBunny     | https://wiki.inkbunny.net/wiki/API |
| SoFurry      | https://wiki.sofurry.com/wiki/SoFurry_2.0_API |
| FurryNetwork | FN has a public API that is not documented, they encourage using the REST API -- JSON endpoints |
| Weasyl       | https://projects.weasyl.com/weasylapi/ |
| DeviantArt   | https://www.deviantart.com/developers/ |
| Calameo      | http://help.calameo.com/index.php?title=API:Introduction |
| DocDroid     | No API |
| HashDoc      | No API |
| SoundCloud   | https://developers.soundcloud.com/docs/api/guide |
| BandCamp     | https://bandcamp.com/developer |
| MixCloud     | https://www.mixcloud.com/developers/ |
| 8Tracks      | https://8tracks.com/developers/api_v3 |
| YouTube      | https://developers.google.com/youtube/v3/getting-started |
| Vimeo        | https://developer.vimeo.com/ |

#### Upload Support

| Network | API Info |
| ------- | -------- |
| DropBox      | https://www.dropbox.com/developers/documentation/http/documentation#files-upload |
| Google Drive | https://developers.google.com/drive/v2/reference/files/insert |
| Twitter      | https://dev.twitter.com/rest/media/uploading-media |
| Tumblr       | https://www.tumblr.com/docs/en/api/v2#posting |
| FurAffinity  | Not Available<sup>†</sup> |
| InkBunny     | https://wiki.inkbunny.net/wiki/API#Submission_Details |
| SoFurry      | https://wiki.sofurry.com/wiki/Submission_Upload_JSON_API |
| FurryNetwork | Not Available<sup>†</sup> |
| Weasyl       | Not Available<sup>†</sup> |
| DeviantArt   | https://www.deviantart.com/developers/http/v1/20160316/stash_publish/a799a5c0967dca14e854286df9746793 |
| Calameo      | Publish Endpoints from main Doc |
| DocDroid     | Not Available<sup>†</sup> |
| HashDoc      | Not Available<sup>†</sup> |
| SoundCloud   | https://developers.soundcloud.com/docs/api/guide#uploading |
| BandCamp     | Not Available<sup>†</sup>, BandCamp's API is for updating merch and band information only |
| MixCloud     | https://www.mixcloud.com/developers/#uploads |
| 8Tracks      | Not Available<sup>†</sup>, 8Tracks API doesn't provide support for creating a "Mix" programmatically |
| YouTube      | https://developers.google.com/youtube/v3/guides/uploading_a_video |
| Vimeo        | https://developer.vimeo.com/api/start#upload-api |

 * † - This necessitates a network capture to discover how transfers are done

#### Download Support
| Network | API Info |
| ------- | -------- |
| DropBox      | https://www.dropbox.com/developers/documentation/http/documentation#files-download |
| Google Drive | https://developers.google.com/drive/v2/reference/files/get |

## Form Data
FurAffinity

Twitter - Tweet
