# MediaXPost Specifications
Intended to allow media to be posted on multiple media (e.g. art/writing/audio/social) networks at once with ease.

## Free Features
* Chrome / FireFox Extension
* Social Networks (Link to Post from a Network) -- Twitter, Tumblr
* Art Networks -- FA, IB, SF, FN, Weasyl, DA
* Writing Networks -- Calameo, HashDoc, DocDroid
* Audio Networks -- Soundcloud, BandCamp, MixCloud, 8Tracks
* Video Networks -- YouTube, Vimeo

## Premium Features ( $2.00 upgrade )
 * Live Stream Announcement
 * Media Library Migration Tools

## Network Capabilities

**Core**

| Network | Embedding<sup>1</sup> | Embedded<sup>2</sup> |  Ext. Link<sup>3</sup> |
| ------- |:---------:|:--------:|:------:|
| Twitter    | N | Y<sup>★</sup> | Y |
| Tumblr     | Y | Y<sup>★</sup> | Y |
| FA         | N | N | * |
| IB         | N | N | * |
| SF         | N | N | * |
| FN         | N | Y<sup>★</sup> | * |
| Weasyl     | N | Y<sup>★</sup> | * |
| DA         | N | ? | * |
| Calameo    | Y | ? | * |
| DocDroid   | Y | ? | * |
| HashDoc    | Y | ? | * |
| SoundCloud | Y | N | * |
| BandCamp  | Y | N | * |
| MixCloud  | Y | N | * |
| 8Tracks   | Y | N | * |
| YouTube   | Y | N | * |
| Vimeo     | Y | N | * |

**Upload**

| Network | Art | Video | Audio | Writing |
| ------- |:---:|:-----:|:-----:|:-------:|
| Twitter    | ? | ? | ? | ? |
| Tumblr     | ? | ? | ? | ? |
| FA         | ? | ? | ? | ? |
| IB         | ? | ? | ? | ? |
| SF         | ? | ? | ? | ? |
| FN         | ? | ? | ? | ? |
| Weasyl     | ? | ? | ? | ? |
| DA         | ? | ? | ? | ? |
| Calameo    | - | - | - | PDF, DOCX, TXT |
| DocDroid   | - | - | - | PDF, DOCX, TXT |
| HashDoc    | - | - | - | PDF, DOCX, TXT |
| SoundCloud | - | - | OGG, MP3, MP4A, WAV | - |
| BandCamp   | - | - | MP3, MP4A, WAV | - |
| MixCloud   | - | - | MP3, MP4A, WAV | - |
| 8Tracks    | - | - | MP3, MP4A, WAV | - |
| YouTube    | - | - | - | - |
| Vimeo      | - | - | - | - |

**APIs**

| Network | API |
| ------- | --- |
| Twitter    | https://dev.twitter.com/rest/public |
| Tumblr     | https://www.tumblr.com/docs/en/api/v2 |
| FA         | FA does not have API. Existing browser session must be used with direct network call within an IFRAME (the main reason for this being a browser extension) |
| IB         | https://wiki.inkbunny.net/wiki/API |
| SF         | https://wiki.sofurry.com/wiki/SoFurry_2.0_API |
| FN         | FN has a public API that is not documented, they encourage using the REST API -- JSON endpoints |
| Weasyl     | https://projects.weasyl.com/weasylapi/ |
| DA         | https://www.deviantart.com/developers/ |
| Calameo    | http://help.calameo.com/index.php?title=API:Introduction |
| DocDroid   | ? |
| HashDoc    | ? |
| SoundCloud | https://developers.soundcloud.com/docs/api/guide |
| BandCamp   | https://bandcamp.com/developer |
| MixCloud   | https://www.mixcloud.com/developers/ |
| 8Tracks    | https://8tracks.com/developers/api_v3 |
| YouTube    | ? |
| Vimeo      | ? |

 * 1 - Supports allowing this content to be shared by being embedded in another site.
 * 2 - Supports embedded content from other sites.
 * 3 - Supports external links to other content.
 * ★ - Media Sites available are limited in scope

## Server Side Support
 * Database to Manage
  * Users
  * User Entitlements (Premium)
  * Account tracking across different site spaces (UserA @ FA = UserA1 @ FN)

## Form Data

FurAffinity


Twitter - Tweet
