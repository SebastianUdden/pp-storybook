import React from "react";
import { storiesOf } from "@storybook/react";
import SVG from "./SVG";

import { rotation3d } from "../../svgs/actions/rotation-3d";
import { accessibility } from "../../svgs/actions/accessibility";
import { accessibilityNew } from "../../svgs/actions/accessibility-new";
import { accessible } from "../../svgs/actions/accessible";
import { accessibleForward } from "../../svgs/actions/accessible-forward";
import { accountBalance } from "../../svgs/actions/account-balance";
import { accountBalanceWallet } from "../../svgs/actions/account-balance-wallet";
import { accountBox } from "../../svgs/actions/account-box";
import { accountCircle } from "../../svgs/actions/account-circle";
import { addShoppingCart } from "../../svgs/actions/add-shopping-cart";
import { alarm } from "../../svgs/actions/alarm";
import { alarmAdd } from "../../svgs/actions/alarm-add";
import { alarmOff } from "../../svgs/actions/alarm-off";
import { alarmOn } from "../../svgs/actions/alarm-on";
import { allInbox } from "../../svgs/actions/all-inbox";
import { allOut } from "../../svgs/actions/all-out";
import { android } from "../../svgs/actions/android";
import { announcement } from "../../svgs/actions/announcement";
import { arrowRightAlt } from "../../svgs/actions/arrow-right-alt";
import { aspectRatio } from "../../svgs/actions/aspect-ratio";
import { assessment } from "../../svgs/actions/assessment";
import { assignment } from "../../svgs/actions/assignment";
import { assignmentIndividual } from "../../svgs/actions/assignment-individual";
import { assignmentLate } from "../../svgs/actions/assignment-late";
import { assignmentReturn } from "../../svgs/actions/assignment-return";
import { assignmentReturned } from "../../svgs/actions/assignment-returned";
import { assignmentTurnedIn } from "../../svgs/actions/assignment-turned-in";
import { autoRenew } from "../../svgs/actions/auto-renew";
import { backup } from "../../svgs/actions/backup";
import { book } from "../../svgs/actions/book";
import { bookmark } from "../../svgs/actions/bookmark";
import { bookmarkBorder } from "../../svgs/actions/bookmark-border";
import { bookmarks } from "../../svgs/actions/bookmarks";
import { bugReport } from "../../svgs/actions/bug-report";
import { build } from "../../svgs/actions/build";
import { cached } from "../../svgs/actions/cached";
import { calendarToday } from "../../svgs/actions/calendar-today";
import { calendarViewDay } from "../../svgs/actions/calendar-view-day";
import { cameraEnhance } from "../../svgs/actions/camera-enhance";
import { cancelScheduleSend } from "../../svgs/actions/cancel-schedule-send";
import { cardGiftcard } from "../../svgs/actions/card-giftcard";
import { cardMembership } from "../../svgs/actions/card-membership";
import { cardTravel } from "../../svgs/actions/card-travel";
import { changeHistory } from "../../svgs/actions/change-history";
import { checkCircle } from "../../svgs/actions/check-circle";
import { checkCircleOutline } from "../../svgs/actions/check-circle-outline";
import { chromeReader } from "../../svgs/actions/chrome-reader";
import { code } from "../../svgs/actions/code";
import { commute } from "../../svgs/actions/commute";
import { compareArrows } from "../../svgs/actions/compare-arrows";
import { contactSupport } from "../../svgs/actions/contact-support";
import { contactless } from "../../svgs/actions/contactless";
import { copyright } from "../../svgs/actions/copyright";
import { creditCard } from "../../svgs/actions/credit-card";
import { dashboard } from "../../svgs/actions/dashboard";
import { dateRange } from "../../svgs/actions/date-range";
import { deleteTrashcan } from "../../svgs/actions/delete-trashcan";
import { deleteTrashcanForever } from "../../svgs/actions/delete-trashcan-forever";
import { deleteTrashcanOutline } from "../../svgs/actions/delete-trashcan-outline";
import { description } from "../../svgs/actions/description";
import { dns } from "../../svgs/actions/dns";
import { done } from "../../svgs/actions/done";
import { doneAll } from "../../svgs/actions/done-all";
import { doneOutline } from "../../svgs/actions/done-outline";
import { donutLarge } from "../../svgs/actions/donut-large";
import { donutSmall } from "../../svgs/actions/donut-small";
import { dragIndicator } from "../../svgs/actions/drag-indicator";
import { eco } from "../../svgs/actions/eco";
import { eject } from "../../svgs/actions/eject";
import { euroSymbol } from "../../svgs/actions/euro-symbol";
import { event } from "../../svgs/actions/event";
import { eventSeat } from "../../svgs/actions/event-seat";
import { exitToApp } from "../../svgs/actions/exit-to-app";
import { explore } from "../../svgs/actions/explore";
import { exploreOff } from "../../svgs/actions/explore-off";
import { extension } from "../../svgs/actions/extension";
import { face } from "../../svgs/actions/face";
import { favorite } from "../../svgs/actions/favorite";
import { favoriteBorder } from "../../svgs/actions/favorite-border";
import { feedback } from "../../svgs/actions/feedback";
import { findInPage } from "../../svgs/actions/find-in-page";
import { findReplace } from "../../svgs/actions/find-replace";
import { fingerprint } from "../../svgs/actions/fingerprint";
import { flightLand } from "../../svgs/actions/flight-land";
import { flightTakeoff } from "../../svgs/actions/flight-takeoff";
import { flipToBack } from "../../svgs/actions/flip-to-back";
import { flipToFront } from "../../svgs/actions/flip-to-front";
import { gavel } from "../../svgs/actions/gavel";
import { getApp } from "../../svgs/actions/get-app";
import { gif } from "../../svgs/actions/gif";
import { googleTranslate } from "../../svgs/actions/google-translate";
import { grade } from "../../svgs/actions/grade";
import { groupWork } from "../../svgs/actions/group-work";
import { help } from "../../svgs/actions/help";
import { helpOutline } from "../../svgs/actions/help-outline";
import { highlightOff } from "../../svgs/actions/highlight-off";
import { history } from "../../svgs/actions/history";
import { home } from "../../svgs/actions/home";
import { horizontalSplit } from "../../svgs/actions/horizontal-split";
import { hourglassEmpty } from "../../svgs/actions/hourglass-empty";
import { hourglassFull } from "../../svgs/actions/hourglass-full";
import { http } from "../../svgs/actions/http";
import { https } from "../../svgs/actions/https";
import { importantDevices } from "../../svgs/actions/important-devices";
import { info } from "../../svgs/actions/info";
import { input } from "../../svgs/actions/input";
import { invertColors } from "../../svgs/actions/invert-colors";
import { label } from "../../svgs/actions/label";
import { labelImportant } from "../../svgs/actions/label-important";
import { labelOff } from "../../svgs/actions/label-off";
import { language } from "../../svgs/actions/language";
import { launch } from "../../svgs/actions/launch";
import { lineStyle } from "../../svgs/actions/line-style";
import { lineWeight } from "../../svgs/actions/line-weight";
import { list } from "../../svgs/actions/list";
import { lock } from "../../svgs/actions/lock";
import { lockOpen } from "../../svgs/actions/lock-open";
import { loyalty } from "../../svgs/actions/loyalty";
import { markUnreadMailbox } from "../../svgs/actions/mark-unread-mailbox";
import { maximize } from "../../svgs/actions/maximize";
import { minimize } from "../../svgs/actions/minimize";
import { motorcycle } from "../../svgs/actions/motorcycle";
import { noteAdd } from "../../svgs/actions/note-add";
import { offlineBolt } from "../../svgs/actions/offline-bolt";
import { offlinePin } from "../../svgs/actions/offline-pin";
import { opacity } from "../../svgs/actions/opacity";
import { openInBrowser } from "../../svgs/actions/open-in-browser";
import { openInNew } from "../../svgs/actions/open-in-new";
import { openWith } from "../../svgs/actions/open-with";
import { pageview } from "../../svgs/actions/pageview";
import { panTool } from "../../svgs/actions/pan-tool";
import { payment } from "../../svgs/actions/payment";
import { permitCameraMic } from "../../svgs/actions/permit-camera-mic";
import { permitContactCalendar } from "../../svgs/actions/permit-contact-calendar";
import { permitDataSetting } from "../../svgs/actions/permit-data-setting";
import { permitDeviceInformation } from "../../svgs/actions/permit-device-information";
import { permitIdentity } from "../../svgs/actions/permit-identity";
import { permitMedia } from "../../svgs/actions/permit-media";
import { permitPhoneMsg } from "../../svgs/actions/permit-phone-msg";
import { permitScanWifi } from "../../svgs/actions/permit-scan-wifi";
import { pets } from "../../svgs/actions/pets";
import { pictureInPicture } from "../../svgs/actions/picture-in-picture";
import { pictureInPictureAlt } from "../../svgs/actions/picture-in-picture-alt";
import { playForWork } from "../../svgs/actions/play-for-work";
import { polymer } from "../../svgs/actions/polymer";
import { powerSetting } from "../../svgs/actions/power-setting";
import { pregnantWoman } from "../../svgs/actions/pregnant-woman";
import { print } from "../../svgs/actions/print";
import { queryBuilder } from "../../svgs/actions/query-builder";
import { questionAnswer } from "../../svgs/actions/question-answer";
import { receipt } from "../../svgs/actions/receipt";
import { recordVoiceOver } from "../../svgs/actions/record-voice-over";
import { redeem } from "../../svgs/actions/redeem";
import { removeShoppingCart } from "../../svgs/actions/remove-shopping-cart";
import { reorder } from "../../svgs/actions/reorder";
import { reportProblem } from "../../svgs/actions/report-problem";
import { restore } from "../../svgs/actions/restore";
import { restoreFromTrash } from "../../svgs/actions/restore-from-trash";
import { restorePage } from "../../svgs/actions/restore-page";
import { room } from "../../svgs/actions/room";
import { roundedCorner } from "../../svgs/actions/rounded-corner";
import { rowing } from "../../svgs/actions/rowing";
import { schedule } from "../../svgs/actions/schedule";
import { search } from "../../svgs/actions/search";
import { settingsApplication } from "../../svgs/actions/settings-application";
import { settingsBackupRestore } from "../../svgs/actions/settings-backup-restore";
import { settingsBluetooth } from "../../svgs/actions/settings-bluetooth";
import { settingsBrightness } from "../../svgs/actions/settings-brightness";
import { settingsCellphone } from "../../svgs/actions/settings-cellphone";
import { settingsEthernet } from "../../svgs/actions/settings-ethernet";
import { settingsInputAntenna } from "../../svgs/actions/settings-input-antenna";
import { settingsInputComponent } from "../../svgs/actions/settings-input-component";
import { settingsInputComposite } from "../../svgs/actions/settings-input-composite";
import { settingsInputHdmi } from "../../svgs/actions/settings-input-hdmi";
import { settingsInputVideo } from "../../svgs/actions/settings-input-video";
import { settingsOverscan } from "../../svgs/actions/settings-overscan";
import { settingsPhone } from "../../svgs/actions/settings-phone";
import { settingsPower } from "../../svgs/actions/settings-power";
import { settingsRemote } from "../../svgs/actions/settings-remote";
import { settingsVoice } from "../../svgs/actions/settings-voice";
import { shop } from "../../svgs/actions/shop";
import { shopTwo } from "../../svgs/actions/shop-two";
import { shoppingBasket } from "../../svgs/actions/shopping-basket";
import { shoppingCart } from "../../svgs/actions/shopping-cart";
import { speakerNotes } from "../../svgs/actions/speaker-notes";
import { speakerNotesOff } from "../../svgs/actions/speaker-notes-off";
import { spellcheck } from "../../svgs/actions/spellcheck";
import { stars } from "../../svgs/actions/stars";
import { store } from "../../svgs/actions/store";
import { subject } from "../../svgs/actions/subject";
import { supervisedUserCircle } from "../../svgs/actions/supervised-user-circle";
import { supervisorAccount } from "../../svgs/actions/supervisor-account";
import { swapHorizontal } from "../../svgs/actions/swap-horizontal";
import { swapHorizontalCircle } from "../../svgs/actions/swap-horizontal-circle";
import { swapVertical } from "../../svgs/actions/swap-vertical";
import { swapVerticalCircle } from "../../svgs/actions/swap-vertical-circle";
import { syncAlt } from "../../svgs/actions/sync-alt";
import { systemUpdate } from "../../svgs/actions/system-update";
import { tab } from "../../svgs/actions/tab";
import { tabUnselected } from "../../svgs/actions/tab-unselected";
import { textRotateUp } from "../../svgs/actions/text-rotate-up";
import { textRotateVertical } from "../../svgs/actions/text-rotate-vertical";
import { textRotateAngleDown } from "../../svgs/actions/text-rotate-angle-down";
import { textRotateAngleUp } from "../../svgs/actions/text-rotate-angle-up";
import { textRotateDown } from "../../svgs/actions/text-rotate-down";
import { textRotateNone } from "../../svgs/actions/text-rotate-none";
import { theaters } from "../../svgs/actions/theaters";
import { thumbsDown } from "../../svgs/actions/thumbs-down";
import { thumbsUp } from "../../svgs/actions/thumbs-up";
import { thumbsUpDown } from "../../svgs/actions/thumbs-up-down";
import { timeline } from "../../svgs/actions/timeline";
import { toc } from "../../svgs/actions/toc";
import { today } from "../../svgs/actions/today";
import { toll } from "../../svgs/actions/toll";
import { touchApp } from "../../svgs/actions/touch-app";
import { trackChanges } from "../../svgs/actions/track-changes";
import { translate } from "../../svgs/actions/translate";
import { trendingDown } from "../../svgs/actions/trending-down";
import { trendingFlat } from "../../svgs/actions/trending-flat";
import { trendingUp } from "../../svgs/actions/trending-up";
import { update } from "../../svgs/actions/update";
import { verifiedUser } from "../../svgs/actions/verified-user";
import { verticalSplit } from "../../svgs/actions/vertical-split";
import { viewAgenda } from "../../svgs/actions/view-agenda";
import { viewArray } from "../../svgs/actions/view-array";
import { viewCarousel } from "../../svgs/actions/view-carousel";
import { viewColumn } from "../../svgs/actions/view-column";
import { viewDay } from "../../svgs/actions/view-day";
import { viewHeadline } from "../../svgs/actions/view-headline";
import { viewList } from "../../svgs/actions/view-list";
import { viewModule } from "../../svgs/actions/view-module";
import { viewQuilt } from "../../svgs/actions/view-quilt";
import { viewStream } from "../../svgs/actions/view-stream";
import { viewWeek } from "../../svgs/actions/view-week";
import { visibility } from "../../svgs/actions/visibility";
import { visibilityOff } from "../../svgs/actions/visibility-off";
import { voiceOverOff } from "../../svgs/actions/voice-over-off";
import { watchLater } from "../../svgs/actions/watch-later";
import { work } from "../../svgs/actions/work";
import { workOff } from "../../svgs/actions/work-off";
import { workOutline } from "../../svgs/actions/work-outline";
import { youtubeSearch } from "../../svgs/actions/youtube-search";
import { zoomIn } from "../../svgs/actions/zoom-in";
import { zoomOut } from "../../svgs/actions/zoom-out";

storiesOf("SVG actions", module)
  .add("all actions", () => (
    <>
      <SVG {...rotation3d} />
      <SVG {...accessibility} />
      <SVG {...accessibilityNew} />
      <SVG {...accessible} />
      <SVG {...accessibleForward} />
      <SVG {...accountBalance} />
      <SVG {...accountBalanceWallet} />
      <SVG {...accountBox} />
      <SVG {...accountCircle} />
      <SVG {...addShoppingCart} />
      <SVG {...alarm} />
      <SVG {...alarmAdd} />
      <SVG {...alarmOff} />
      <SVG {...alarmOn} />
      <SVG {...allInbox} />
      <SVG {...allOut} />
      <SVG {...android} />
      <SVG {...announcement} />
      <SVG {...arrowRightAlt} />
      <SVG {...aspectRatio} />
      <SVG {...assessment} />
      <SVG {...assignment} />
      <SVG {...assignmentIndividual} />
      <SVG {...assignmentLate} />
      <SVG {...assignmentReturn} />
      <SVG {...assignmentReturned} />
      <SVG {...assignmentTurnedIn} />
      <SVG {...autoRenew} />
      <SVG {...backup} />
      <SVG {...book} />
      <SVG {...bookmark} />
      <SVG {...bookmarkBorder} />
      <SVG {...bookmarks} />
      <SVG {...bugReport} />
      <SVG {...build} />
      <SVG {...cached} />
      <SVG {...calendarToday} />
      <SVG {...calendarViewDay} />
      <SVG {...cameraEnhance} />
      <SVG {...cancelScheduleSend} />
      <SVG {...cardGiftcard} />
      <SVG {...cardMembership} />
      <SVG {...cardTravel} />
      <SVG {...changeHistory} />
      <SVG {...checkCircle} />
      <SVG {...checkCircleOutline} />
      <SVG {...chromeReader} />
      <SVG {...code} />
      <SVG {...commute} />
      <SVG {...compareArrows} />
      <SVG {...contactSupport} />
      <SVG {...contactless} />
      <SVG {...copyright} />
      <SVG {...creditCard} />
      <SVG {...dashboard} />
      <SVG {...dateRange} />
      <SVG {...deleteTrashcan} />
      <SVG {...deleteTrashcanForever} />
      <SVG {...deleteTrashcanOutline} />
      <SVG {...description} />
      <SVG {...dns} />
      <SVG {...done} />
      <SVG {...doneAll} />
      <SVG {...doneOutline} />
      <SVG {...donutLarge} />
      <SVG {...donutSmall} />
      <SVG {...dragIndicator} />
      <SVG {...eco} />
      <SVG {...eject} />
      <SVG {...euroSymbol} />
      <SVG {...event} />
      <SVG {...eventSeat} />
      <SVG {...exitToApp} />
      <SVG {...explore} />
      <SVG {...exploreOff} />
      <SVG {...extension} />
      <SVG {...face} />
      <SVG {...favorite} />
      <SVG {...favoriteBorder} />
      <SVG {...feedback} />
      <SVG {...findInPage} />
      <SVG {...findReplace} />
      <SVG {...fingerprint} />
      <SVG {...flightLand} />
      <SVG {...flightTakeoff} />
      <SVG {...flipToBack} />
      <SVG {...flipToFront} />
      <SVG {...gavel} />
      <SVG {...getApp} />
      <SVG {...gif} />
      <SVG {...googleTranslate} />
      <SVG {...grade} />
      <SVG {...groupWork} />
      <SVG {...help} />
      <SVG {...helpOutline} />
      <SVG {...highlightOff} />
      <SVG {...history} />
      <SVG {...home} />
      <SVG {...horizontalSplit} />
      <SVG {...hourglassEmpty} />
      <SVG {...hourglassFull} />
      <SVG {...http} />
      <SVG {...https} />
      <SVG {...importantDevices} />
      <SVG {...info} />
      <SVG {...input} />
      <SVG {...invertColors} />
      <SVG {...label} />
      <SVG {...labelImportant} />
      <SVG {...labelOff} />
      <SVG {...language} />
      <SVG {...launch} />
      <SVG {...lineStyle} />
      <SVG {...lineWeight} />
      <SVG {...list} />
      <SVG {...lock} />
      <SVG {...lockOpen} />
      <SVG {...loyalty} />
      <SVG {...markUnreadMailbox} />
      <SVG {...maximize} />
      <SVG {...minimize} />
      <SVG {...motorcycle} />
      <SVG {...noteAdd} />
      <SVG {...offlineBolt} />
      <SVG {...offlinePin} />
      <SVG {...opacity} />
      <SVG {...openInBrowser} />
      <SVG {...openInNew} />
      <SVG {...openWith} />
      <SVG {...pageview} />
      <SVG {...panTool} />
      <SVG {...payment} />
      <SVG {...permitCameraMic} />
      <SVG {...permitContactCalendar} />
      <SVG {...permitDataSetting} />
      <SVG {...permitDeviceInformation} />
      <SVG {...permitIdentity} />
      <SVG {...permitMedia} />
      <SVG {...permitPhoneMsg} />
      <SVG {...permitScanWifi} />
      <SVG {...pets} />
      <SVG {...pictureInPicture} />
      <SVG {...pictureInPictureAlt} />
      <SVG {...playForWork} />
      <SVG {...polymer} />
      <SVG {...powerSetting} />
      <SVG {...pregnantWoman} />
      <SVG {...print} />
      <SVG {...queryBuilder} />
      <SVG {...questionAnswer} />
      <SVG {...receipt} />
      <SVG {...recordVoiceOver} />
      <SVG {...redeem} />
      <SVG {...removeShoppingCart} />
      <SVG {...reorder} />
      <SVG {...reportProblem} />
      <SVG {...restore} />
      <SVG {...restoreFromTrash} />
      <SVG {...restorePage} />
      <SVG {...room} />
      <SVG {...roundedCorner} />
      <SVG {...rowing} />
      <SVG {...schedule} />
      <SVG {...search} />
      <SVG {...settingsApplication} />
      <SVG {...settingsBackupRestore} />
      <SVG {...settingsBluetooth} />
      <SVG {...settingsBrightness} />
      <SVG {...settingsCellphone} />
      <SVG {...settingsEthernet} />
      <SVG {...settingsInputAntenna} />
      <SVG {...settingsInputComponent} />
      <SVG {...settingsInputComposite} />
      <SVG {...settingsInputHdmi} />
      <SVG {...settingsInputVideo} />
      <SVG {...settingsOverscan} />
      <SVG {...settingsPhone} />
      <SVG {...settingsPower} />
      <SVG {...settingsRemote} />
      <SVG {...settingsVoice} />
      <SVG {...shop} />
      <SVG {...shopTwo} />
      <SVG {...shoppingBasket} />
      <SVG {...shoppingCart} />
      <SVG {...speakerNotes} />
      <SVG {...speakerNotesOff} />
      <SVG {...spellcheck} />
      <SVG {...stars} />
      <SVG {...store} />
      <SVG {...subject} />
      <SVG {...supervisedUserCircle} />
      <SVG {...supervisorAccount} />
      <SVG {...swapHorizontal} />
      <SVG {...swapHorizontalCircle} />
      <SVG {...swapVertical} />
      <SVG {...swapVerticalCircle} />
      <SVG {...syncAlt} />
      <SVG {...systemUpdate} />
      <SVG {...tab} />
      <SVG {...tabUnselected} />
      <SVG {...textRotateUp} />
      <SVG {...textRotateVertical} />
      <SVG {...textRotateAngleDown} />
      <SVG {...textRotateAngleUp} />
      <SVG {...textRotateDown} />
      <SVG {...textRotateNone} />
      <SVG {...theaters} />
      <SVG {...thumbsDown} />
      <SVG {...thumbsUp} />
      <SVG {...thumbsUpDown} />
      <SVG {...timeline} />
      <SVG {...toc} />
      <SVG {...today} />
      <SVG {...toll} />
      <SVG {...touchApp} />
      <SVG {...trackChanges} />
      <SVG {...translate} />
      <SVG {...trendingDown} />
      <SVG {...trendingFlat} />
      <SVG {...trendingUp} />
      <SVG {...update} />
      <SVG {...verifiedUser} />
      <SVG {...verticalSplit} />
      <SVG {...viewAgenda} />
      <SVG {...viewArray} />
      <SVG {...viewCarousel} />
      <SVG {...viewColumn} />
      <SVG {...viewDay} />
      <SVG {...viewHeadline} />
      <SVG {...viewList} />
      <SVG {...viewModule} />
      <SVG {...viewQuilt} />
      <SVG {...viewStream} />
      <SVG {...viewWeek} />
      <SVG {...visibility} />
      <SVG {...visibilityOff} />
      <SVG {...voiceOverOff} />
      <SVG {...watchLater} />
      <SVG {...work} />
      <SVG {...workOff} />
      <SVG {...workOutline} />
      <SVG {...youtubeSearch} />
      <SVG {...zoomIn} />
      <SVG {...zoomOut} />
    </>
  ))
  .add("3D rotation", () => <SVG {...rotation3d} />)
  .add("accessibility", () => <SVG {...accessibility} />)
  .add("accessibility new", () => <SVG {...accessibilityNew} />)
  .add("accessible", () => <SVG {...accessible} />)
  .add("accessible forward", () => <SVG {...accessibleForward} />)
  .add("account balance", () => <SVG {...accountBalance} />)
  .add("account balance wallet", () => <SVG {...accountBalanceWallet} />)
  .add("account box", () => <SVG {...accountBox} />)
  .add("account circle", () => <SVG {...accountCircle} />)
  .add("add shopping cart", () => <SVG {...addShoppingCart} />)
  .add("alarm", () => <SVG {...alarm} />)
  .add("alarm add", () => <SVG {...alarmAdd} />)
  .add("alarm off", () => <SVG {...alarmOff} />)
  .add("alarm on", () => <SVG {...alarmOn} />)
  .add("all inbox", () => <SVG {...allInbox} />)
  .add("all out", () => <SVG {...allOut} />)
  .add("android", () => <SVG {...android} />)
  .add("announcement", () => <SVG {...announcement} />)
  .add("arrow right alt", () => <SVG {...arrowRightAlt} />)
  .add("aspect ratio", () => <SVG {...aspectRatio} />)
  .add("assessment", () => <SVG {...assessment} />)
  .add("assignment", () => <SVG {...assignment} />)
  .add("assignment individual", () => <SVG {...assignmentIndividual} />)
  .add("assignment late", () => <SVG {...assignmentLate} />)
  .add("assignment return", () => <SVG {...assignmentReturn} />)
  .add("assignment returned", () => <SVG {...assignmentReturned} />)
  .add("assignment turned in", () => <SVG {...assignmentTurnedIn} />)
  .add("auto renew", () => <SVG {...autoRenew} />)
  .add("backup", () => <SVG {...backup} />)
  .add("book", () => <SVG {...book} />)
  .add("bookmark", () => <SVG {...bookmark} />)
  .add("bookmark border", () => <SVG {...bookmarkBorder} />)
  .add("bookmarks", () => <SVG {...bookmarks} />)
  .add("bug report", () => <SVG {...bugReport} />)
  .add("build", () => <SVG {...build} />)
  .add("cached", () => <SVG {...cached} />)
  .add("calendar today", () => <SVG {...calendarToday} />)
  .add("calendar view day", () => <SVG {...calendarViewDay} />)
  .add("camera enhance", () => <SVG {...cameraEnhance} />)
  .add("cancel schedule send", () => <SVG {...cancelScheduleSend} />)
  .add("card giftcard", () => <SVG {...cardGiftcard} />)
  .add("card membership", () => <SVG {...cardMembership} />)
  .add("card travel", () => <SVG {...cardTravel} />)
  .add("change history", () => <SVG {...changeHistory} />)
  .add("check circle", () => <SVG {...checkCircle} />)
  .add("check circle outline", () => <SVG {...checkCircleOutline} />)
  .add("chrome reader", () => <SVG {...chromeReader} />)
  .add("code", () => <SVG {...code} />)
  .add("commute", () => <SVG {...commute} />)
  .add("compare arrows", () => <SVG {...compareArrows} />)
  .add("contact support", () => <SVG {...contactSupport} />)
  .add("contactless", () => <SVG {...contactless} />)
  .add("copyright", () => <SVG {...copyright} />)
  .add("credit card", () => <SVG {...creditCard} />)
  .add("dashboard", () => <SVG {...dashboard} />)
  .add("date range", () => <SVG {...dateRange} />)
  .add("delete trashcan", () => <SVG {...deleteTrashcan} />)
  .add("delete trashcan forever", () => <SVG {...deleteTrashcanForever} />)
  .add("delete trashcan outline", () => <SVG {...deleteTrashcanOutline} />)
  .add("description", () => <SVG {...description} />)
  .add("dns", () => <SVG {...dns} />)
  .add("done", () => <SVG {...done} />)
  .add("done all", () => <SVG {...doneAll} />)
  .add("done outline", () => <SVG {...doneOutline} />)
  .add("donut large", () => <SVG {...donutLarge} />)
  .add("donut small", () => <SVG {...donutSmall} />)
  .add("drag indicator", () => <SVG {...dragIndicator} />)
  .add("eco", () => <SVG {...eco} />)
  .add("eject", () => <SVG {...eject} />)
  .add("euro symbol", () => <SVG {...euroSymbol} />)
  .add("event", () => <SVG {...event} />)
  .add("event seat", () => <SVG {...eventSeat} />)
  .add("exit to app", () => <SVG {...exitToApp} />)
  .add("explore", () => <SVG {...explore} />)
  .add("explore off", () => <SVG {...exploreOff} />)
  .add("extension", () => <SVG {...extension} />)
  .add("face", () => <SVG {...face} />)
  .add("favorite", () => <SVG {...favorite} />)
  .add("favorite border", () => <SVG {...favoriteBorder} />)
  .add("feedback", () => <SVG {...feedback} />)
  .add("find in page", () => <SVG {...findInPage} />)
  .add("find and replace", () => <SVG {...findReplace} />)
  .add("fingerprint", () => <SVG {...fingerprint} />)
  .add("flight land", () => <SVG {...flightLand} />)
  .add("flight takeoff", () => <SVG {...flightTakeoff} />)
  .add("flip to back", () => <SVG {...flipToBack} />)
  .add("flip to front", () => <SVG {...flipToFront} />)
  .add("gavel", () => <SVG {...gavel} />)
  .add("get app", () => <SVG {...getApp} />)
  .add("gif", () => <SVG {...gif} />)
  .add("google translate", () => <SVG {...googleTranslate} />)
  .add("grade", () => <SVG {...grade} />)
  .add("group work", () => <SVG {...groupWork} />)
  .add("help", () => <SVG {...help} />)
  .add("help outline", () => <SVG {...helpOutline} />)
  .add("highlight off", () => <SVG {...highlightOff} />)
  .add("history", () => <SVG {...history} />)
  .add("home", () => <SVG {...home} />)
  .add("horizontal split", () => <SVG {...horizontalSplit} />)
  .add("hourglass empty", () => <SVG {...hourglassEmpty} />)
  .add("hourglass full", () => <SVG {...hourglassFull} />)
  .add("http", () => <SVG {...http} />)
  .add("https", () => <SVG {...https} />)
  .add("important devices", () => <SVG {...importantDevices} />)
  .add("info", () => <SVG {...info} />)
  .add("input", () => <SVG {...input} />)
  .add("invert colors", () => <SVG {...invertColors} />)
  .add("label", () => <SVG {...label} />)
  .add("label important", () => <SVG {...labelImportant} />)
  .add("label off", () => <SVG {...labelOff} />)
  .add("language", () => <SVG {...language} />)
  .add("launch", () => <SVG {...launch} />)
  .add("line style", () => <SVG {...lineStyle} />)
  .add("line weight", () => <SVG {...lineWeight} />)
  .add("list", () => <SVG {...list} />)
  .add("lock", () => <SVG {...lock} />)
  .add("lock open", () => <SVG {...lockOpen} />)
  .add("loyalty", () => <SVG {...loyalty} />)
  .add("mark unread mailbox", () => <SVG {...markUnreadMailbox} />)
  .add("maximize", () => <SVG {...maximize} />)
  .add("minimize", () => <SVG {...minimize} />)
  .add("motorcycle", () => <SVG {...motorcycle} />)
  .add("note add", () => <SVG {...noteAdd} />)
  .add("offline bolt", () => <SVG {...offlineBolt} />)
  .add("offline pin", () => <SVG {...offlinePin} />)
  .add("opacity", () => <SVG {...opacity} />)
  .add("open in browser", () => <SVG {...openInBrowser} />)
  .add("open in new", () => <SVG {...openInNew} />)
  .add("open with", () => <SVG {...openWith} />)
  .add("pageview", () => <SVG {...pageview} />)
  .add("pan tool", () => <SVG {...panTool} />)
  .add("payment", () => <SVG {...payment} />)
  .add("permit camera/mic", () => <SVG {...permitCameraMic} />)
  .add("permit contact/calendar", () => <SVG {...permitContactCalendar} />)
  .add("permit data setting", () => <SVG {...permitDataSetting} />)
  .add("permit device information", () => <SVG {...permitDeviceInformation} />)
  .add("permit identity", () => <SVG {...permitIdentity} />)
  .add("permit media", () => <SVG {...permitMedia} />)
  .add("permit phone/message", () => <SVG {...permitPhoneMsg} />)
  .add("permit scan wifi", () => <SVG {...permitScanWifi} />)
  .add("pets", () => <SVG {...pets} />)
  .add("picture in picture", () => <SVG {...pictureInPicture} />)
  .add("picture in picture alt", () => <SVG {...pictureInPictureAlt} />)
  .add("play for work", () => <SVG {...playForWork} />)
  .add("polymer", () => <SVG {...polymer} />)
  .add("power setting", () => <SVG {...powerSetting} />)
  .add("pregnant woman", () => <SVG {...pregnantWoman} />)
  .add("print", () => <SVG {...print} />)
  .add("query builder", () => <SVG {...queryBuilder} />)
  .add("question answer", () => <SVG {...questionAnswer} />)
  .add("receipt", () => <SVG {...receipt} />)
  .add("record voice over", () => <SVG {...recordVoiceOver} />)
  .add("redeem", () => <SVG {...redeem} />)
  .add("remove shopping cart", () => <SVG {...removeShoppingCart} />)
  .add("reorder", () => <SVG {...reorder} />)
  .add("report problem", () => <SVG {...reportProblem} />)
  .add("restore", () => <SVG {...restore} />)
  .add("restore from trash", () => <SVG {...restoreFromTrash} />)
  .add("restore page", () => <SVG {...restorePage} />)
  .add("room", () => <SVG {...room} />)
  .add("rounded corner", () => <SVG {...roundedCorner} />)
  .add("rowing", () => <SVG {...rowing} />)
  .add("schedule", () => <SVG {...schedule} />)
  .add("search", () => <SVG {...search} />)
  .add("settings applications", () => <SVG {...settingsApplication} />)
  .add("settings backup restore", () => <SVG {...settingsBackupRestore} />)
  .add("settings bluetooth", () => <SVG {...settingsBluetooth} />)
  .add("settings brightness", () => <SVG {...settingsBrightness} />)
  .add("settings cellphone", () => <SVG {...settingsCellphone} />)
  .add("settings ethernet", () => <SVG {...settingsEthernet} />)
  .add("settings input antenna", () => <SVG {...settingsInputAntenna} />)
  .add("settings input component", () => <SVG {...settingsInputComponent} />)
  .add("settings input composite", () => <SVG {...settingsInputComposite} />)
  .add("settings input hdmi", () => <SVG {...settingsInputHdmi} />)
  .add("settings input video", () => <SVG {...settingsInputVideo} />)
  .add("settings overscan", () => <SVG {...settingsOverscan} />)
  .add("settings phone", () => <SVG {...settingsPhone} />)
  .add("settings power", () => <SVG {...settingsPower} />)
  .add("settings remote", () => <SVG {...settingsRemote} />)
  .add("settings voice", () => <SVG {...settingsVoice} />)
  .add("shop", () => <SVG {...shop} />)
  .add("shop two", () => <SVG {...shopTwo} />)
  .add("shopping basket", () => <SVG {...shoppingBasket} />)
  .add("shopping cart", () => <SVG {...shoppingCart} />)
  .add("speaker notes", () => <SVG {...speakerNotes} />)
  .add("speaker notes off", () => <SVG {...speakerNotesOff} />)
  .add("spellcheck", () => <SVG {...spellcheck} />)
  .add("stars", () => <SVG {...stars} />)
  .add("store", () => <SVG {...store} />)
  .add("subject", () => <SVG {...subject} />)
  .add("supervised user circle", () => <SVG {...supervisedUserCircle} />)
  .add("supervisor account", () => <SVG {...supervisorAccount} />)
  .add("swap horizontal", () => <SVG {...swapHorizontal} />)
  .add("swap horizontal circle", () => <SVG {...swapHorizontalCircle} />)
  .add("swap vertical", () => <SVG {...swapVertical} />)
  .add("swap vertical circle", () => <SVG {...swapVerticalCircle} />)
  .add("sync alt", () => <SVG {...syncAlt} />)
  .add("system update", () => <SVG {...systemUpdate} />)
  .add("tab", () => <SVG {...tab} />)
  .add("tab unselected", () => <SVG {...tabUnselected} />)
  .add("text rotate up", () => <SVG {...textRotateUp} />)
  .add("text rotate vertical", () => <SVG {...textRotateVertical} />)
  .add("text rotate angle down", () => <SVG {...textRotateAngleDown} />)
  .add("text rotate angle up", () => <SVG {...textRotateAngleUp} />)
  .add("text rotate down", () => <SVG {...textRotateDown} />)
  .add("text rotate none", () => <SVG {...textRotateNone} />)
  .add("theaters", () => <SVG {...theaters} />)
  .add("thumbs down", () => <SVG {...thumbsDown} />)
  .add("thumbs up", () => <SVG {...thumbsUp} />)
  .add("thumbs up/down", () => <SVG {...thumbsUpDown} />)
  .add("timeline", () => <SVG {...timeline} />)
  .add("toc", () => <SVG {...toc} />)
  .add("today", () => <SVG {...today} />)
  .add("toll", () => <SVG {...toll} />)
  .add("touch app", () => <SVG {...touchApp} />)
  .add("track changes", () => <SVG {...trackChanges} />)
  .add("translate", () => <SVG {...translate} />)
  .add("trending down", () => <SVG {...trendingDown} />)
  .add("trending flat", () => <SVG {...trendingFlat} />)
  .add("trending up", () => <SVG {...trendingUp} />)
  .add("update", () => <SVG {...update} />)
  .add("verified user", () => <SVG {...verifiedUser} />)
  .add("vertical split", () => <SVG {...verticalSplit} />)
  .add("view agenda", () => <SVG {...viewAgenda} />)
  .add("view array", () => <SVG {...viewArray} />)
  .add("view carousel", () => <SVG {...viewCarousel} />)
  .add("view column", () => <SVG {...viewColumn} />)
  .add("view day", () => <SVG {...viewDay} />)
  .add("view headline", () => <SVG {...viewHeadline} />)
  .add("view list", () => <SVG {...viewList} />)
  .add("view module", () => <SVG {...viewModule} />)
  .add("view quilt", () => <SVG {...viewQuilt} />)
  .add("view stream", () => <SVG {...viewStream} />)
  .add("view week", () => <SVG {...viewWeek} />)
  .add("visibility", () => <SVG {...visibility} />)
  .add("visibility off", () => <SVG {...visibilityOff} />)
  .add("voice over off", () => <SVG {...voiceOverOff} />)
  .add("watch later", () => <SVG {...watchLater} />)
  .add("work", () => <SVG {...work} />)
  .add("work off", () => <SVG {...workOff} />)
  .add("work outline", () => <SVG {...workOutline} />)
  .add("youtube search", () => <SVG {...youtubeSearch} />)
  .add("zoom in", () => <SVG {...zoomIn} />)
  .add("zoom out", () => <SVG {...zoomOut} />);
