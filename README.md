# MediaXPost Specifications
Intended to allow media to be posted on multiple media (e.g. art/writing/audio/social) networks at once with ease.

## Free Features
 * Chrome Extension (https://developer.chrome.com/extensions/manifest)
 * FireFox Extension (https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json)
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

### Tools
 * Mock-up Tool -- http://pencil.evolus.vn/
 * Angular2 Command Line -- https://cli.angular.io/ (with AOT compiling)
 * Design Model -- Telegram Web App -- https://github.com/zhukov/webogram
 * Design Model -- https://www.sitepoint.com/chrome-extension-angular-2/
 * Design Model -- https://github.com/mgechev/angular-seed/blob/master/package.json

### Client Side
 * Browser Extension -- Modal Window App (https://developer.chrome.com/apps/app_window)
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
| Network | File Format(s) | File Size Limit | Image Size Limit | Storage Limit | Thumbnail |
| ------- |:--------------:|:---------------:|:----------------:|:-------------:|:---------:|
| Twitter      | - | - | - | - | - |
| Tumblr       | - | - | - | - | - |
| FurAffinity<sup>★</sup> | JPG, GIF, PNG | 10 Mb | 1280x1280 | ∞ | Y |
| InkBunny     | - | - | - | - | - |
| SoFurry      | - | - | - | - | - |
| FurryNetwork | - | - | - | - | - |
| Weasyl       | JPG, PNG, GIF | 10 Mb | - | ∞ | Y |
| DeviantArt   | PNG, JPG, BMP | 30 Mb | - | 2 Gb | N |

* ★ - Images are converted to JPG format, transparency may be lost

#### Thumbnail Media
| Network | File Format(s) | File Size Limit | Image Size Limit |
| ------- |:--------------:|:---------------:|:----------------:|
| Twitter      | - | - | - |
| Tumblr       | - | - | - |
| FurAffinity  | JPG, GIF, PNG | 10 Mb | 1280x1280 |
| InkBunny     | - | - | - |
| SoFurry      | - | - | - |
| FurryNetwork | - | - | - |
| Weasyl       | - | - | - |
| DeviantArt   | - | - | - |
| Calameo      | - | - | - |
| DocDroid     | - | - | - |
| HashDoc      | - | - | - |
| SoundCloud   | - | - | - |
| BandCamp     | - | - | - |
| MixCloud     | - | - | - |
| 8Tracks      | - | - | - |
| YouTube      | - | - | - |
| Vimeo        | - | - | - |

#### Audio Media (Music/Sound)
| Network | File Format(s) | Size Limit | Storage Limit | Cover Art |
| ------- |:--------------:|:----------:|:-------------:|:---------:|
| Twitter      | - | - | - | - |
| Tumblr       | - | - | - | - |
| FurAffinity  | MID, WAV, MP3, MPEG | 10 Mb | ∞ | Y |
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
| FurAffinity  | SWF | 10 Mb | ∞ | Y |
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
| FurAffinity<sup>★</sup> | DOC, DOCX, RTF, TXT, PDF, ODT | 10 Mb | ∞ | Y |
| InkBunny     | - | - | - | - |
| SoFurry      | - | - | - | - |
| Weasyl       | TXT MD PDF | 2/2/10 Mb | ∞ | Y |
| DeviantArt   | TXT | 64 kb  | 2 Gb | N |
| Calameo      | PDF, DOCX, DOC, ODT, RTF, XLS, XLSX, ODS, PPT, PPTX, ODP, TXT | 100 Mb | 15 Gb | - |
| DocDroid     | PDF, DOCX, DOC, ODT, RTF, XLS, XLSX, ODS, PPT, PPTX, ODP, TXT | - | - | - |
| HashDoc      | CSV, DOC, DOCM, DOCX, DOT, DXF, ODF, PDF, PPS, PPT, PPTX, RTF, SVG, TXT, XLS, XLSM, XLSX, XLT | 150 Mb | ∞ | - |

* ★ - Must be UTF-8 encoded

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
## Form Upload Data
### FurAffinity
FurAffinity uses a 4 step process to handle uploads.

**Step 1**
<table>
<tr><td colspan=2>**Endpoint:** https://www.furaffinity.net/submit/</td></tr>
<tr><td colspan=2>**Method:** POST</td></tr>
<tr><th>Field</th><th>Data</th></tr>
<tr><td>submission_type</td><td>"submission" - Art/Image<br/>"flash"<br/>"story"<br/>"poetry"<br/>"music"</td></tr>
<tr><td>part</td><td>2</td></tr>
</table>

**Step 2**
<table>
<tr><td colspan=2>**Endpoint:** https://www.furaffinity.net/submit/</td></tr>
<tr><td colspan=2>**Method:** POST</td></tr>
<tr><td colspan=2>**Encoding** multipart/form-data</td></tr>
<tr><th>Field</th><th>Data</th></tr>
<tr><td>submission*</td><td>selected media file to upload</td></tr>
<tr><td>thumbnail</td><td>selected thumbnail file to upload</td></tr>
<tr><td>submission_type</td><td>hidden value from previous step</td></tr>
<tr><td>key</td><td>embedded hidden value; presumably a context token required for upload</td></tr>
<tr><td>part</td><td>3</td></tr>
</table>

**Step 3**

Performs an upload of files and then performs a redirect and GET of  https://www.furaffinity.net/submit/story/4/ .
This page contains a number of pieces of information which must be submitted in the final step

| Field | Data |
|:-----:|:----:|
| part | 5 |
| key  | a new context token required for upload |
| submission_type | same as before |
| cat_duplicate | Submission Category (See Below) |

**Step 4**
<table>
<tr><td colspan=2>**Endpoint:** https://www.furaffinity.net/submit/</td></tr>
<tr><td colspan=2>**Method:** POST</td></tr>
<tr><td colspan=2>**Encoding** multipart/form-data</td></tr>
<tr><th>Field</th><th>Data</th></tr>
<tr><td>title</td><td>Title, up to 60 characters long</td></tr>
<tr><td>message</td><td>Description</td></tr>
<tr><td>lock_comments</td><td>boolean value</td></tr>
<tr><td>keywords</td><td>Keywords (should be separated by spaces)</td></tr>
<tr><td>cat (disabled)</td><td>Submission Category (See Below)</td></tr>
<tr><td>scrap</td><td>boolean value (1 if true)</td></tr>
<tr><td>atype</td><td>See Article Theme (See Below)</td></tr>
<tr><td>species</td><td>Species (See Below)</td></tr>
<tr><td>gender</td><td>Gender (See Below)</td></tr>
<tr><td>rating</td><td>General - 0<br/>Adult - 1<br/>Mature - 2<br/></td></tr>
<tr><td>create_folder_name</td><td>Text, new folder name</td></tr>
<tr><td>submission_type</td><td>hidden value from previous step</td></tr>
<tr><td>key</td><td>embedded hidden value; as before but a new context token editing submission data</td></tr>
<tr><td>part</td><td>5</td></tr>
<tr><td>cat_duplicate</td><td>embedded hidden value "13" -- no idea what this is or why it is included</td></tr>
</table>

**Step 5**
Upon Submission another redirect occurs which goes directly to the submission page -- https://www.furaffinity.net/view/######## where the ####### is the submission id.

**Submission Category**

| Value | Meaning |
| ----- | ------- |
| 1 | All |
| 2 | Artwork (Digital) |
| 3 | Artwork (Traditional) |
| 4 | Cellshading |
| 5 | Crafting |
| 6 | Designs |
| 7 | Flash |
| 8 | Fursuiting |
| 9 | Icons |
| 10 | Mosaics |
| 11 | Photography |
| 12 | Sculpting |
| 13 | Story |
| 14 | Poetry |
| 15 | Prose |
| 16 | Music |
| 17 | Podcasts |
| 18 | Skins |
| 19 | Handhelds |
| 20 | Resources |
| 21 | Adoptables |
| 22 | Auctions |
| 23 | Contests |
| 24 | Current Events |
| 26 | Stockart |
| 28 | Scraps |
| 29 | Wallpaper |
| 30 | YCH / Sale |
| 31 | Other |

**Article Theme Types**

| Value | Meaning |
| ----- | ------- |
| 1 | All |
| 2 | Abstract |
| 3 | Animal related (non-anthro) |
| 4 | Anime |
| 5 | Comics |
| 6 | Doodle |
| 7 | Fanart |
| 8 | Fantasy |
| 9 | Human |
| 10 | Portraits |
| 11 | Scenery |
| 12 | Still Life |
| 13 | Tutorials |
| 14 | Miscellaneous |
| 101 | Baby fur |
| 102 | Bondage |
| 103 | Digimon |
| 104 | Fat Furs |
| 105 | Fetish Other |
| 106 | Fursuit |
| 119 | Gore / Macabre Art |
| 107 | Hyper |
| 108 | Inflation |
| 109 | Macro / Micro |
| 110 | Muscle |
| 111 | My Little Pony / Brony |
| 112 | Paw |
| 113 | Pokemon |
| 114 | Pregnancy |
| 115 | Sonic |
| 116 | Transformation |
| 117 | Vore |
| 118 | Water Sports |
| 100 | General Furry Art |
| 201 | Techno |
| 202 | Trance |
| 203 | House |
| 204 | 90s |
| 205 | 80s |
| 206 | 70s |
| 207 | 60s |
| 208 | Pre-60s |
| 209 | Classical |
| 210 | Game Music |
| 211 | Rock |
| 212 | Pop |
| 213 | Rap |
| 214 | Industrial |
| 200 | Other Music |

**Species**

| Value | Meaning |
| ----- | ------- |
| 1 | Unspecified / Any |
| 1000 | Amphibian (Other) |
| 1001 | Frog |
| 1002 | Newt |
| 1003 | Salamander |
| 2000 | Aquatic (Other) |
| 2001 | Cephalopod |
| 2002 | Cetacean - Dolphin |
| 2003 | Cetacean - Whale |
| 2004 | Cetacean (Other) |
| 2005 | Fish (General) |
| 2006 | Shark |
| 3000 | Avian (Other) |
| 3001 | Corvid |
| 3002 | Crow |
| 3003 | Duck |
| 3004 | Eagle |
| 3005 | Falcon |
| 3006 | Goose |
| 3007 | Gryphon |
| 3008 | Hawk |
| 3009 | Owl |
| 3010 | Phoenix |
| 3011 | Swan |
| 4000 | Dragon (Other) |
| 4001 | Eastern |
| 4002 | Hydra |
| 4003 | Serpent |
| 4004 | Western |
| 4005 | Wyvern |
| 5000 | Exotic (Other) |
| 5001 | Alien |
| 5002 | Argonian |
| 5003 | Chakat |
| 5004 | Chocobo |
| 5005 | Citra |
| 5006 | Crux |
| 5007 | Daemon |
| 5008 | Digimon |
| 5009 | Dracat |
| 5010 | Draenei |
| 5011 | Elf |
| 5012 | Gargoyle |
| 5013 | Iksar |
| 5014 | Langurhali |
| 5015 | Monster |
| 5016 | Naga |
| 5017 | Moogle |
| 5018 | Orc |
| 5019 | Pokemon |
| 5020 | Satyr |
| 5021 | Sergal |
| 5022 | Tanuki |
| 5023 | Unicorn |
| 5024 | Xenomorph |
| 6000 | Mammals (Other) |
| 6001 | Bat |
| 6002 | Bear |
| 6003 | Bovid - Bovines |
| 6004 | Bovid - Antelope |
| 6005 | Bovid - Gazelle |
| 6006 | Bovid - Goat |
| 6007 | Bovid (Other) |
| 6008 | Canid - Coyote |
| 6009 | Canid - Doberman |
| 6010 | Canid - Dog |
| 6011 | Canid - Dingo |
| 6012 | Canid - GSD |
| 6013 | Canid - Jackal |
| 6014 | Canid - Husky |
| 6015 | Canid - Vulpine |
| 6016 | Canid - Wolf |
| 6017 | Canid (Other) |
| 6018 | Cervine |
| 6019 | Donkey |
| 6020 | Feline - Cat |
| 6021 | Feline - Cheetah |
| 6022 | Feline - Cougar |
| 6023 | Feline - Jaguar |
| 6024 | Feline - Leopard |
| 6025 | Feline - Lion |
| 6026 | Feline - Lynx |
| 6027 | Feline - Ocelot |
| 6028 | Feline - Panther |
| 6029 | Feline - Tiger |
| 6030 | Feline (Other) |
| 6031 | Giraffe |
| 6032 | Hedgehog |
| 6033 | Hippopotamus |
| 6034 | Horse |
| 6035 | Hyena |
| 6036 | Llama |
| 6037 | Marsupial - Opossum |
| 6038 | Marsupial - Kangaroo |
| 6039 | Marsupial - Koala |
| 6040 | Marsupial - Quoll |
| 6041 | Marsupial - Wallaby |
| 6042 | Marsupial (Other) |
| 6043 | Meerkat |
| 6044 | Mongoose |
| 6045 | Mustelid - Badger |
| 6046 | Mustelid - Ferret |
| 6047 | Mustelid - Otter |
| 6048 | Mustelid - Mink |
| 6049 | Mustelid - Weasel |
| 6050 | Mustelid - Wolverine |
| 6051 | Mustelid (Other) |
| 6052 | Panda |
| 6053 | Pig/Swine |
| 6054 | Primate - Gorilla |
| 6055 | Primate - Human |
| 6056 | Primate - Lemur |
| 6057 | Primate - Monkey |
| 6058 | Primate (Other) |
| 6059 | Rabbit |
| 6060 | Raccoon |
| 6061 | Rat |
| 6062 | Red Panda |
| 6063 | Rhinoceros |
| 6064 | Rodent - Beaver |
| 6065 | Rodent - Mouse |
| 6066 | Rodent - Rat |
| 6067 | Rodent (Other) |
| 6068 | Seal |
| 6069 | Skunk |
| 6070 | Squirrel |
| 6071 | Zebra |
| 7000 | Reptilian (Other) |
| 7001 | Alligator |
| 7002 | Crocodile |
| 7003 | Gecko |
| 7004 | Iguana |
| 7005 | Lizard |
| 7006 | Snake |
| 7007 | Turtle |
| 8000 | Arachnid |
| 8001 | Dinosaur - Sauropod |
| 8002 | Dinosaur - Theropod |
| 8003 | Insect (Other) |
| 8004 | Mantid |
| 8005 | Scorpion |

**Gender**

| Value | Meaning |
| ----- | ------- |
| 0 | Any |  
| 2 | Male |  
| 3 | Female |  
| 4 | Herm |  
| 5 | Transgender |  
| 6 | Multiple characters |  
| 7 | Other / Not Specified |  

Twitter - Tweet
