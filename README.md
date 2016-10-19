# MediaXPost
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

## Network Capabilities
| Network | Embedding<sup>1</sup> | Embedded<sup>2</sup> |  Ext. Link<sup>3</sup> | Upload | Art | Video | Audio | Writing | API |
| ------- |:---------:|:--------:|:------:|:----:|:---:|:-----:|:-----:|:-------:| --- |
| Twitter    | N | Y<sup>★</sup> | Y | Y | ? | ? | ? | ? | https://dev.twitter.com/rest/public |
| Tumblr     | Y | Y<sup>★</sup> | Y | Y | ? | ? | ? | ? | https://www.tumblr.com/docs/en/api/v2 |
| FA         | N | N | * | Y | ? | ? | ? | ? | FA does not have API. Existing browser session must be used with direct network call within an IFRAME (the main reason for this being a browser extension) |
| IB         | N | N | * | Y | ? | ? | ? | ? | https://wiki.inkbunny.net/wiki/API |
| SF         | N | N | * | Y | ? | ? | ? | ? | https://wiki.sofurry.com/wiki/SoFurry_2.0_API |
| FN         | N | Y<sup>★</sup> | * | Y | ? | ? | ? | ? | FN has a public API that is not documented, they encourage using the REST API -- JSON endpoints |
| Weasyl     | N | Y<sup>★</sup> | * | Y | ? | ? | ? | ? | https://projects.weasyl.com/weasylapi/ |
| DA         | N | ? | * | Y | ? | ? | ? | ? | https://www.deviantart.com/developers/ |
| Calameo    | Y | ? | * | Y | - | - | - | PDF, DOCX, TXT | http://help.calameo.com/index.php?title=API:Introduction |
| DocDroid   | Y | ? | * | Y | - | - | - | PDF, DOCX, TXT | ? |
| HashDoc    | Y | ? | * | Y | - | - | - | PDF, DOCX, TXT | ? |
| SoundCloud | Y | N | * | Y | - | - | OGG, MP3, MP4A, WAV | - | https://developers.soundcloud.com/docs/api/guide |
| BandCamp  | Y | N | * | Y | - | - | MP3, MP4A, WAV | - | https://bandcamp.com/developer |
| MixCloud  | Y | N | * | Y | - | - | MP3, MP4A, WAV | - | https://www.mixcloud.com/developers/ |
| 8Tracks   | Y | N | * | Y | - | - | MP3, MP4A, WAV | - | https://8tracks.com/developers/api_v3 |
| YouTube   | Y | N | * | Y | - | - | - | - | ?
| Vimeo     | Y | N | * | Y | - | - | - | - | ?

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
