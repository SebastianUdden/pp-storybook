import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";
import { copyMe } from "../../svgs/av/ZcopyMe";
import { view4k } from "../../svgs/av/view-4k";
import { addToQueue } from "../../svgs/av/add-to-queue";
import { airplay } from "../../svgs/av/airplay";
import { album } from "../../svgs/av/album";
import { artTrack } from "../../svgs/av/art-track";
import { avTimer } from "../../svgs/av/av-timer";
import { brandingWatermark } from "../../svgs/av/branding-watermark";
import { callToAction } from "../../svgs/av/call-to-action";
import { closedCaption } from "../../svgs/av/closed-caption";
import { controlCamera } from "../../svgs/av/control-camera";
import { equalizer } from "../../svgs/av/equalizer";
import { explicit } from "../../svgs/av/explicit";
import { fastForward } from "../../svgs/av/fast-forward";
import { fastRewind } from "../../svgs/av/fast-rewind";
import { featuredPlaylist } from "../../svgs/av/featured-playlist";
import { featuredVideo } from "../../svgs/av/featured-video";
import { fiberDvr } from "../../svgs/av/fiber-dvr";
import { fiberManualRecord } from "../../svgs/av/fiber-manual-record";
import { fiberNew } from "../../svgs/av/fiber-new";
import { fiberPin } from "../../svgs/av/fiber-pin";
import { fiberSmartRecord } from "../../svgs/av/fiber-smart-record";
import { forward10 } from "../../svgs/av/forward-10";
import { forward30 } from "../../svgs/av/forward-30";
import { forward5 } from "../../svgs/av/forward-5";
import { games } from "../../svgs/av/games";
import { hd } from "../../svgs/av/hd";
import { hearing } from "../../svgs/av/hearing";
import { highQuality } from "../../svgs/av/high-quality";
import { libraryAdd } from "../../svgs/av/library-add";
import { libraryBooks } from "../../svgs/av/library-books";
import { libraryMusic } from "../../svgs/av/library-music";
import { loop } from "../../svgs/av/loop";
import { mic } from "../../svgs/av/mic";
import { micNone } from "../../svgs/av/mic-none";
import { micOff } from "../../svgs/av/mic-off";
import { missedVideoCall } from "../../svgs/av/missed-video-call";
import { movie } from "../../svgs/av/movie";
import { musicVideo } from "../../svgs/av/music-video";
import { newReleases } from "../../svgs/av/new-releases";
import { notInterested } from "../../svgs/av/not-interested";
import { note } from "../../svgs/av/note";
import { pause } from "../../svgs/av/pause";
import { pauseCircleFilled } from "../../svgs/av/pause-circle-filled";
import { pauseCircleOutline } from "../../svgs/av/pause-circle-outline";
import { play } from "../../svgs/av/play";
import { playCircleFilled } from "../../svgs/av/play-circle-filled";
import { playCircleOutline } from "../../svgs/av/play-circle-outline";
import { playlistAdd } from "../../svgs/av/playlist-add";
import { playlistAddCheck } from "../../svgs/av/playlist-add-check";
import { playlistPlay } from "../../svgs/av/playlist-play";
import { queue } from "../../svgs/av/queue";
import { queueMusic } from "../../svgs/av/queue-music";
import { queuePlayNext } from "../../svgs/av/queue-play-next";
import { radio } from "../../svgs/av/radio";
import { recentActors } from "../../svgs/av/recent-actors";
import { removeFromQueue } from "../../svgs/av/remove-from-queue";
import { repeat } from "../../svgs/av/repeat";
import { repeatOne } from "../../svgs/av/repeat-one";
import { replay } from "../../svgs/av/replay";
import { replay10 } from "../../svgs/av/replay-10";
import { replay30 } from "../../svgs/av/replay-30";
import { replay5 } from "../../svgs/av/replay-5";
import { shuffle } from "../../svgs/av/shuffle";
import { skipNext } from "../../svgs/av/skip-next";
import { skipPrevious } from "../../svgs/av/skip-previous";
import { slowMotionVideo } from "../../svgs/av/slow-motion-video";
import { snooze } from "../../svgs/av/snooze";
import { sortByAlpha } from "../../svgs/av/sort-by-alpha";
import { speed } from "../../svgs/av/speed";
import { stop } from "../../svgs/av/stop";
import { subscriptions } from "../../svgs/av/subscriptions";
import { subtitles } from "../../svgs/av/subtitles";
import { surroundSound } from "../../svgs/av/surround-sound";
import { videoCall } from "../../svgs/av/video-call";
import { videoLabel } from "../../svgs/av/video-label";
import { videoLibrary } from "../../svgs/av/video-library";
import { videoCam } from "../../svgs/av/video-cam";
import { videoCamOff } from "../../svgs/av/video-cam-off";
import { volumeDown } from "../../svgs/av/volume-down";
import { volumeMute } from "../../svgs/av/volume-mute";
import { volumeOff } from "../../svgs/av/volume-off";
import { volumeUp } from "../../svgs/av/volume-up";
import { web } from "../../svgs/av/web";
import { webAsset } from "../../svgs/av/web-asset";

storiesOf("SVG av", module)
  .add("all icons", () => (
    <>
      <SVG {...addToQueue} />
      <SVG {...airplay} />
      <SVG {...album} />
      <SVG {...artTrack} />
      <SVG {...avTimer} />
      <SVG {...brandingWatermark} />
      <SVG {...callToAction} />
      <SVG {...closedCaption} />
      <SVG {...controlCamera} />
      <SVG {...equalizer} />
      <SVG {...explicit} />
      <SVG {...fastForward} />
      <SVG {...fastRewind} />
      <SVG {...featuredPlaylist} />
      <SVG {...featuredVideo} />
      <SVG {...fiberDvr} />
      <SVG {...fiberManualRecord} />
      <SVG {...fiberNew} />
      <SVG {...fiberPin} />
      <SVG {...fiberSmartRecord} />
      <SVG {...forward5} />
      <SVG {...forward10} />
      <SVG {...forward30} />
      <SVG {...games} />
      <SVG {...hd} />
      <SVG {...hearing} />
      <SVG {...highQuality} />
      <SVG {...libraryAdd} />
      <SVG {...libraryBooks} />
      <SVG {...libraryMusic} />
      <SVG {...loop} />
      <SVG {...mic} />
      <SVG {...micNone} />
      <SVG {...micOff} />
      <SVG {...missedVideoCall} />
      <SVG {...movie} />
      <SVG {...musicVideo} />
      <SVG {...newReleases} />
      <SVG {...notInterested} />
      <SVG {...note} />
      <SVG {...pause} />
      <SVG {...pauseCircleFilled} />
      <SVG {...pauseCircleOutline} />
      <SVG {...play} />
      <SVG {...playCircleFilled} />
      <SVG {...playCircleOutline} />
      <SVG {...playlistAdd} />
      <SVG {...playlistAddCheck} />
      <SVG {...playlistPlay} />
      <SVG {...queue} />
      <SVG {...queueMusic} />
      <SVG {...queuePlayNext} />
      <SVG {...radio} />
      <SVG {...recentActors} />
      <SVG {...removeFromQueue} />
      <SVG {...repeat} />
      <SVG {...repeatOne} />
      <SVG {...replay} />
      <SVG {...replay5} />
      <SVG {...replay10} />
      <SVG {...replay30} />
      <SVG {...shuffle} />
      <SVG {...skipNext} />
      <SVG {...skipPrevious} />
      <SVG {...slowMotionVideo} />
      <SVG {...snooze} />
      <SVG {...sortByAlpha} />
      <SVG {...speed} />
      <SVG {...stop} />
      <SVG {...subscriptions} />
      <SVG {...subtitles} />
      <SVG {...surroundSound} />
      <SVG {...videoCall} />
      <SVG {...videoCam} />
      <SVG {...videoLabel} />
      <SVG {...videoLibrary} />
      <SVG {...videoCamOff} />
      <SVG {...volumeDown} />
      <SVG {...volumeMute} />
      <SVG {...volumeOff} />
      <SVG {...volumeUp} />
      <SVG {...web} />
      <SVG {...webAsset} />
    </>
  ))
  .add("add to queue", () => <SVG {...addToQueue} />)
  .add("airplay", () => <SVG {...airplay} />)
  .add("album", () => <SVG {...album} />)
  .add("copyMe", () => <SVG {...copyMe} />)
  .add("art track", () => <SVG {...artTrack} />)
  .add("av timer", () => <SVG {...avTimer} />)
  .add("branding watermark", () => <SVG {...brandingWatermark} />)
  .add("call to action", () => <SVG {...callToAction} />)
  .add("closed caption", () => <SVG {...closedCaption} />)
  .add("control camera", () => <SVG {...controlCamera} />)
  .add("equalizer", () => <SVG {...equalizer} />)
  .add("explicit", () => <SVG {...explicit} />)
  .add("fast forward", () => <SVG {...fastForward} />)
  .add("fast rewind", () => <SVG {...fastRewind} />)
  .add("featured playlist", () => <SVG {...featuredPlaylist} />)
  .add("featured video", () => <SVG {...featuredVideo} />)
  .add("fiber dvr", () => <SVG {...fiberDvr} />)
  .add("fiber manual record", () => <SVG {...fiberManualRecord} />)
  .add("fiber new", () => <SVG {...fiberNew} />)
  .add("fiber pin", () => <SVG {...fiberPin} />)
  .add("fiber smart record", () => <SVG {...fiberSmartRecord} />)
  .add("forward 5", () => <SVG {...forward5} />)
  .add("forward 10", () => <SVG {...forward10} />)
  .add("forward 30", () => <SVG {...forward30} />)
  .add("games", () => <SVG {...games} />)
  .add("hd", () => <SVG {...hd} />)
  .add("hearing", () => <SVG {...hearing} />)
  .add("high quality", () => <SVG {...highQuality} />)
  .add("library add", () => <SVG {...libraryAdd} />)
  .add("library books", () => <SVG {...libraryBooks} />)
  .add("library music", () => <SVG {...libraryMusic} />)
  .add("loop", () => <SVG {...loop} />)
  .add("mic", () => <SVG {...mic} />)
  .add("mic none", () => <SVG {...micNone} />)
  .add("mic off", () => <SVG {...micOff} />)
  .add("copyMe", () => <SVG {...copyMe} />)
  .add("missed video call", () => <SVG {...missedVideoCall} />)
  .add("movie", () => <SVG {...movie} />)
  .add("music video", () => <SVG {...musicVideo} />)
  .add("new releases", () => <SVG {...newReleases} />)
  .add("not interested", () => <SVG {...notInterested} />)
  .add("note", () => <SVG {...note} />)
  .add("pause", () => <SVG {...pause} />)
  .add("pause circle filled", () => <SVG {...pauseCircleFilled} />)
  .add("pause circle outline", () => <SVG {...pauseCircleOutline} />)
  .add("play", () => <SVG {...play} />)
  .add("play circle filled", () => <SVG {...playCircleFilled} />)
  .add("play circle outline", () => <SVG {...playCircleOutline} />)
  .add("playlist add", () => <SVG {...playlistAdd} />)
  .add("playlist add check", () => <SVG {...playlistAddCheck} />)
  .add("playlist play", () => <SVG {...playlistPlay} />)
  .add("queue", () => <SVG {...queue} />)
  .add("queue music", () => <SVG {...queueMusic} />)
  .add("queue play next", () => <SVG {...queuePlayNext} />)
  .add("radio", () => <SVG {...radio} />)
  .add("recent actors", () => <SVG {...recentActors} />)
  .add("remove from queue", () => <SVG {...removeFromQueue} />)
  .add("repeat", () => <SVG {...repeat} />)
  .add("repeat one", () => <SVG {...repeatOne} />)
  .add("replay", () => <SVG {...replay} />)
  .add("replay 5", () => <SVG {...replay5} />)
  .add("replay 10", () => <SVG {...replay10} />)
  .add("replay 30", () => <SVG {...replay10} />)
  .add("shuffle", () => <SVG {...shuffle} />)
  .add("skip next", () => <SVG {...skipNext} />)
  .add("skip previous", () => <SVG {...skipPrevious} />)
  .add("slow motion video", () => <SVG {...slowMotionVideo} />)
  .add("snooze", () => <SVG {...snooze} />)
  .add("sort by alpha", () => <SVG {...sortByAlpha} />)
  .add("speed", () => <SVG {...speed} />)
  .add("stop", () => <SVG {...stop} />)
  .add("subscriptions", () => <SVG {...subscriptions} />)
  .add("subtitles", () => <SVG {...subtitles} />)
  .add("surround sound", () => <SVG {...surroundSound} />)
  .add("video call", () => <SVG {...videoCall} />)
  .add("video cam", () => <SVG {...videoCam} />)
  .add("video cam off", () => <SVG {...videoCamOff} />)
  .add("video label", () => <SVG {...videoLabel} />)
  .add("video library", () => <SVG {...videoLibrary} />)
  .add("volume down", () => <SVG {...volumeDown} />)
  .add("volume mute", () => <SVG {...volumeMute} />)
  .add("volume off", () => <SVG {...volumeOff} />)
  .add("volume up", () => <SVG {...volumeUp} />)
  .add("web", () => <SVG {...web} />)
  .add("web asset", () => <SVG {...webAsset} />)
  .add("view 4k", () => <SVG {...view4k} />);
