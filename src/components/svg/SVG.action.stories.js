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
import { allInbox } from "../../svgs/actions/allInbox";
import { allOut } from "../../svgs/actions/allOut";
import { android } from "../../svgs/actions/android";
import { announcement } from "../../svgs/actions/announcement";
import { arrowRightAlt } from "../../svgs/actions/arrow-right-alt";
import { aspectRatio } from "../../svgs/actions/aspect-ratio";
import { assesment } from "../../svgs/actions/assessment";
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
import { euroSymbol } from "../../svgs/actions/euroSymbol";
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
import { markUnreadMailbox } from "../../svgs/actions/mark-unread-mailbox";
import { maximize } from "../../svgs/actions/maximize";
import { minimize } from "../../svgs/actions/minimize";
import { motorcycle } from "../../svgs/actions/motorcycle";
import { noteAdd } from "../../svgs/actions/noteAdd";
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
import { roundedCorner } from "../../svgs/actions/roundedCorner";
import { rowing } from "../../svgs/actions/rowing";
import { schedule } from "../../svgs/actions/schedule";
import { search } from "../../svgs/actions/search";
import { settingsApplications } from "../../svgs/actions/settings-application";
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
  .add("3D rotation", () => <SVG color={"white"} size={24} {...rotation3d} />)
  .add("accessibility", () => (
    <SVG color={"white"} size={24} {...accessibility} />
  ))
  .add("accessibility new", () => (
    <SVG color={"white"} size={24} {...accessibilityNew} />
  ))
  .add("accessible", () => <SVG color={"white"} size={24} {...accessible} />)
  .add("accessible forward", () => (
    <SVG color={"white"} size={24} {...accessibleForward} />
  ))
  .add("account balance", () => (
    <SVG color={"white"} size={24} {...accountBalance} />
  ))
  .add("account balance wallet", () => (
    <SVG color={"white"} size={24} {...accountBalanceWallet} />
  ))
  .add("account box", () => <SVG color={"white"} size={24} {...accountBox} />)
  .add("account circle", () => (
    <SVG color={"white"} size={24} {...accountCircle} />
  ))
  .add("add shopping cart", () => (
    <SVG color={"white"} size={24} {...addShoppingCart} />
  ))
  .add("alarm", () => <SVG color={"white"} size={24} {...alarm} />)
  .add("alarm add", () => <SVG color={"white"} size={24} {...alarmAdd} />)
  .add("alarm off", () => <SVG color={"white"} size={24} {...alarmOff} />)
  .add("alarm on", () => <SVG color={"white"} size={24} {...alarmOn} />)
  .add("all inbox", () => <SVG color={"white"} size={24} {...allInbox} />)
  .add("all out", () => <SVG color={"white"} size={24} {...allOut} />)
  .add("android", () => <SVG color={"white"} size={24} {...android} />)
  .add("announcement", () => (
    <SVG color={"white"} size={24} {...announcement} />
  ))
  .add("arrow right alt", () => (
    <SVG color={"white"} size={24} {...arrowRightAlt} />
  ))
  .add("aspect ratio", () => <SVG color={"white"} size={24} {...aspectRatio} />)
  .add("assesment", () => <SVG color={"white"} size={24} {...assesment} />)
  .add("assignment", () => <SVG color={"white"} size={24} {...assignment} />)
  .add("assignment individual", () => (
    <SVG color={"white"} size={24} {...assignmentIndividual} />
  ))
  .add("assignment late", () => (
    <SVG color={"white"} size={24} {...assignmentLate} />
  ))
  .add("assignment return", () => (
    <SVG color={"white"} size={24} {...assignmentReturn} />
  ))
  .add("assignment returned", () => (
    <SVG color={"white"} size={24} {...assignmentReturned} />
  ))
  .add("assignment turned in", () => (
    <SVG color={"white"} size={24} {...assignmentTurnedIn} />
  ))
  .add("auto renew", () => <SVG color={"white"} size={24} {...autoRenew} />)
  .add("backup", () => <SVG color={"white"} size={24} {...backup} />)
  .add("book", () => <SVG color={"white"} size={24} {...book} />)
  .add("bookmark", () => <SVG color={"white"} size={24} {...bookmark} />)
  .add("bookmark border", () => (
    <SVG color={"white"} size={24} {...bookmarkBorder} />
  ))
  .add("bookmarks", () => <SVG color={"white"} size={24} {...bookmarks} />)
  .add("bug report", () => <SVG color={"white"} size={24} {...bugReport} />)
  .add("build", () => <SVG color={"white"} size={24} {...build} />)
  .add("cached", () => <SVG color={"white"} size={24} {...cached} />)
  .add("calendar today", () => (
    <SVG color={"white"} size={24} {...calendarToday} />
  ))
  .add("calendar view day", () => (
    <SVG color={"white"} size={24} {...calendarViewDay} />
  ))
  .add("camera enhance", () => (
    <SVG color={"white"} size={24} {...cameraEnhance} />
  ))
  .add("cancel schedule send", () => (
    <SVG color={"white"} size={24} {...cancelScheduleSend} />
  ))
  .add("card giftcard", () => (
    <SVG color={"white"} size={24} {...cardGiftcard} />
  ))
  .add("card membership", () => (
    <SVG color={"white"} size={24} {...cardMembership} />
  ))
  .add("card travel", () => <SVG color={"white"} size={24} {...cardTravel} />)
  .add("change history", () => (
    <SVG color={"white"} size={24} {...changeHistory} />
  ))
  .add("check circle", () => <SVG color={"white"} size={24} {...checkCircle} />)
  .add("check circle outline", () => (
    <SVG color={"white"} size={24} {...checkCircleOutline} />
  ))
  .add("chrome reader", () => (
    <SVG color={"white"} size={24} {...chromeReader} />
  ))
  .add("code", () => <SVG color={"white"} size={24} {...code} />)
  .add("commute", () => <SVG color={"white"} size={24} {...commute} />)
  .add("compare arrows", () => (
    <SVG color={"white"} size={24} {...compareArrows} />
  ))
  .add("contact support", () => (
    <SVG color={"white"} size={24} {...contactSupport} />
  ))
  .add("contactless", () => <SVG color={"white"} size={24} {...contactless} />)
  .add("copyright", () => <SVG color={"white"} size={24} {...copyright} />)
  .add("credit card", () => <SVG color={"white"} size={24} {...creditCard} />)
  .add("dashboard", () => <SVG color={"white"} size={24} {...dashboard} />)
  .add("date range", () => <SVG color={"white"} size={24} {...dateRange} />)
  .add("delete trashcan", () => (
    <SVG color={"white"} size={24} {...deleteTrashcan} />
  ))
  .add("delete trashcan forever", () => (
    <SVG color={"white"} size={24} {...deleteTrashcanForever} />
  ))
  .add("delete trashcan outline", () => (
    <SVG color={"white"} size={24} {...deleteTrashcanOutline} />
  ))
  .add("description", () => <SVG color={"white"} size={24} {...description} />)
  .add("dns", () => <SVG color={"white"} size={24} {...dns} />)
  .add("done", () => <SVG color={"white"} size={24} {...done} />)
  .add("done all", () => <SVG color={"white"} size={24} {...doneAll} />)
  .add("done outline", () => <SVG color={"white"} size={24} {...doneOutline} />)
  .add("donut large", () => <SVG color={"white"} size={24} {...donutLarge} />)
  .add("donut small", () => <SVG color={"white"} size={24} {...donutSmall} />)
  .add("drag indicator", () => (
    <SVG color={"white"} size={24} {...dragIndicator} />
  ))
  .add("eco", () => <SVG color={"white"} size={24} {...eco} />)
  .add("eject", () => <SVG color={"white"} size={24} {...eject} />)
  .add("euro symbol", () => <SVG color={"white"} size={24} {...euroSymbol} />)
  .add("event", () => <SVG color={"white"} size={24} {...event} />)
  .add("event seat", () => <SVG color={"white"} size={24} {...eventSeat} />)
  .add("exit to app", () => <SVG color={"white"} size={24} {...exitToApp} />)
  .add("explore", () => <SVG color={"white"} size={24} {...explore} />)
  .add("explore off", () => <SVG color={"white"} size={24} {...exploreOff} />)
  .add("extension", () => <SVG color={"white"} size={24} {...extension} />)
  .add("face", () => <SVG color={"white"} size={24} {...face} />)
  .add("favorite", () => <SVG color={"white"} size={24} {...favorite} />)
  .add("favorite border", () => (
    <SVG color={"white"} size={24} {...favoriteBorder} />
  ))
  .add("feedback", () => <SVG color={"white"} size={24} {...feedback} />)
  .add("find in page", () => <SVG color={"white"} size={24} {...findInPage} />)
  .add("find and replace", () => (
    <SVG color={"white"} size={24} {...findReplace} />
  ))
  .add("fingerprint", () => <SVG color={"white"} size={24} {...fingerprint} />)
  .add("flight land", () => <SVG color={"white"} size={24} {...flightLand} />)
  .add("flight takeoff", () => (
    <SVG color={"white"} size={24} {...flightTakeoff} />
  ))
  .add("flip to back", () => <SVG color={"white"} size={24} {...flipToBack} />)
  .add("flip to front", () => (
    <SVG color={"white"} size={24} {...flipToFront} />
  ))
  .add("gavel", () => <SVG color={"white"} size={24} {...gavel} />)
  .add("get app", () => <SVG color={"white"} size={24} {...getApp} />)
  .add("gif", () => <SVG color={"white"} size={24} {...gif} />)
  .add("google translate", () => (
    <SVG color={"white"} size={24} {...googleTranslate} />
  ))
  .add("grade", () => <SVG color={"white"} size={24} {...grade} />)
  .add("group work", () => <SVG color={"white"} size={24} {...groupWork} />)
  .add("help", () => <SVG color={"white"} size={24} {...help} />)
  .add("help outline", () => <SVG color={"white"} size={24} {...helpOutline} />)
  .add("highlight off", () => (
    <SVG color={"white"} size={24} {...highlightOff} />
  ))
  .add("history", () => <SVG color={"white"} size={24} {...history} />)
  .add("home", () => <SVG color={"white"} size={24} {...home} />)
  .add("horizontal split", () => (
    <SVG color={"white"} size={24} {...horizontalSplit} />
  ))
  .add("hourglass empty", () => (
    <SVG color={"white"} size={24} {...hourglassEmpty} />
  ))
  .add("hourglass full", () => (
    <SVG color={"white"} size={24} {...hourglassFull} />
  ))
  .add("http", () => <SVG color={"white"} size={24} {...http} />)
  .add("https", () => <SVG color={"white"} size={24} {...https} />)
  .add("important devices", () => (
    <SVG color={"white"} size={24} {...importantDevices} />
  ))
  .add("info", () => <SVG color={"white"} size={24} {...info} />)
  .add("input", () => <SVG color={"white"} size={24} {...input} />)
  .add("invert colors", () => (
    <SVG color={"white"} size={24} {...invertColors} />
  ))
  .add("label", () => <SVG color={"white"} size={24} {...label} />)
  .add("label important", () => (
    <SVG color={"white"} size={24} {...labelImportant} />
  ))
  .add("label off", () => <SVG color={"white"} size={24} {...labelOff} />)
  .add("language", () => <SVG color={"white"} size={24} {...language} />)
  .add("launch", () => <SVG color={"white"} size={24} {...launch} />)
  .add("line style", () => <SVG color={"white"} size={24} {...lineStyle} />)
  .add("line weight", () => <SVG color={"white"} size={24} {...lineWeight} />)
  .add("list", () => <SVG color={"white"} size={24} {...list} />)
  .add("lock", () => <SVG color={"white"} size={24} {...lock} />)
  .add("lock open", () => <SVG color={"white"} size={24} {...lockOpen} />)
  .add("loyalty", () => <SVG color={"white"} size={24} {...loyalty} />)
  .add("mark unread mailbox", () => (
    <SVG color={"white"} size={24} {...markUnreadMailbox} />
  ))
  .add("maximize", () => <SVG color={"white"} size={24} {...maximize} />)
  .add("minimize", () => <SVG color={"white"} size={24} {...minimize} />)
  .add("motorcycle", () => <SVG color={"white"} size={24} {...motorcycle} />)
  .add("note add", () => <SVG color={"white"} size={24} {...noteAdd} />)
  .add("offline bolt", () => <SVG color={"white"} size={24} {...offlineBolt} />)
  .add("offline pin", () => <SVG color={"white"} size={24} {...offlinePin} />)
  .add("opacity", () => <SVG color={"white"} size={24} {...opacity} />)
  .add("open in browser", () => (
    <SVG color={"white"} size={24} {...openInBrowser} />
  ))
  .add("open in new", () => <SVG color={"white"} size={24} {...openInNew} />)
  .add("open with", () => <SVG color={"white"} size={24} {...openWith} />)
  .add("pageview", () => <SVG color={"white"} size={24} {...pageview} />)
  .add("pan tool", () => <SVG color={"white"} size={24} {...panTool} />)
  .add("payment", () => <SVG color={"white"} size={24} {...payment} />)
  .add("permit camera/mic", () => (
    <SVG color={"white"} size={24} {...permitCameraMic} />
  ))
  .add("permit contact/calendar", () => (
    <SVG color={"white"} size={24} {...permitContactCalendar} />
  ))
  .add("permit data setting", () => (
    <SVG color={"white"} size={24} {...permitDataSetting} />
  ))
  .add("permit device information", () => (
    <SVG color={"white"} size={24} {...permitDeviceInformation} />
  ))
  .add("permit identity", () => (
    <SVG color={"white"} size={24} {...permitIdentity} />
  ))
  .add("permit media", () => <SVG color={"white"} size={24} {...permitMedia} />)
  .add("permit phone/message", () => (
    <SVG color={"white"} size={24} {...permitPhoneMsg} />
  ))
  .add("permit scan wifi", () => (
    <SVG color={"white"} size={24} {...permitScanWifi} />
  ))
  .add("pets", () => <SVG color={"white"} size={24} {...pets} />)
  .add("picture in picture", () => (
    <SVG color={"white"} size={24} {...pictureInPicture} />
  ))
  .add("picture in picture alt", () => (
    <SVG color={"white"} size={24} {...pictureInPictureAlt} />
  ))
  .add("play for work", () => (
    <SVG color={"white"} size={24} {...playForWork} />
  ))
  .add("polymer", () => <SVG color={"white"} size={24} {...polymer} />)
  .add("power setting", () => (
    <SVG color={"white"} size={24} {...powerSetting} />
  ))
  .add("pregnant woman", () => (
    <SVG color={"white"} size={24} {...pregnantWoman} />
  ))
  .add("print", () => <SVG color={"white"} size={24} {...print} />)
  .add("query builder", () => (
    <SVG color={"white"} size={24} {...queryBuilder} />
  ))
  .add("question answer", () => (
    <SVG color={"white"} size={24} {...questionAnswer} />
  ))
  .add("receipt", () => <SVG color={"white"} size={24} {...receipt} />)
  .add("record voice over", () => (
    <SVG color={"white"} size={24} {...recordVoiceOver} />
  ))
  .add("redeem", () => <SVG color={"white"} size={24} {...redeem} />)
  .add("remove shopping cart", () => (
    <SVG color={"white"} size={24} {...removeShoppingCart} />
  ))
  .add("reorder", () => <SVG color={"white"} size={24} {...reorder} />)
  .add("report problem", () => (
    <SVG color={"white"} size={24} {...reportProblem} />
  ))
  .add("restore", () => <SVG color={"white"} size={24} {...restore} />)
  .add("restore from trash", () => (
    <SVG color={"white"} size={24} {...restoreFromTrash} />
  ))
  .add("restore page", () => <SVG color={"white"} size={24} {...restorePage} />)
  .add("room", () => <SVG color={"white"} size={24} {...room} />)
  .add("rounded corner", () => (
    <SVG color={"white"} size={24} {...roundedCorner} />
  ))
  .add("rowing", () => <SVG color={"white"} size={24} {...rowing} />)
  .add("schedule", () => <SVG color={"white"} size={24} {...schedule} />)
  .add("search", () => <SVG color={"white"} size={24} {...search} />)
  .add("settings applications", () => (
    <SVG color={"white"} size={24} {...settingsApplications} />
  ))
  .add("settings backup restore", () => (
    <SVG color={"white"} size={24} {...settingsBackupRestore} />
  ))
  .add("settings bluetooth", () => (
    <SVG color={"white"} size={24} {...settingsBluetooth} />
  ))
  .add("settings brightness", () => (
    <SVG color={"white"} size={24} {...settingsBrightness} />
  ))
  .add("settings cellphone", () => (
    <SVG color={"white"} size={24} {...settingsCellphone} />
  ))
  .add("settings ethernet", () => (
    <SVG color={"white"} size={24} {...settingsEthernet} />
  ))
  .add("settings input antenna", () => (
    <SVG color={"white"} size={24} {...settingsInputAntenna} />
  ))
  .add("settings input component", () => (
    <SVG color={"white"} size={24} {...settingsInputComponent} />
  ))
  .add("settings input composite", () => (
    <SVG color={"white"} size={24} {...settingsInputComposite} />
  ))
  .add("settings input hdmi", () => (
    <SVG color={"white"} size={24} {...settingsInputHdmi} />
  ))
  .add("settings input video", () => (
    <SVG color={"white"} size={24} {...settingsInputVideo} />
  ))
  .add("settings overscan", () => (
    <SVG color={"white"} size={24} {...settingsOverscan} />
  ))
  .add("settings phone", () => (
    <SVG color={"white"} size={24} {...settingsPhone} />
  ))
  .add("settings power", () => (
    <SVG color={"white"} size={24} {...settingsPower} />
  ))
  .add("settings remote", () => (
    <SVG color={"white"} size={24} {...settingsRemote} />
  ))
  .add("settings voice", () => (
    <SVG color={"white"} size={24} {...settingsVoice} />
  ))
  .add("shop", () => <SVG color={"white"} size={24} {...shop} />)
  .add("shop two", () => <SVG color={"white"} size={24} {...shopTwo} />)
  .add("shopping basket", () => (
    <SVG color={"white"} size={24} {...shoppingBasket} />
  ))
  .add("shopping cart", () => (
    <SVG color={"white"} size={24} {...shoppingCart} />
  ))
  .add("speaker notes", () => (
    <SVG color={"white"} size={24} {...speakerNotes} />
  ))
  .add("speaker notes off", () => (
    <SVG color={"white"} size={24} {...speakerNotesOff} />
  ))
  .add("spellcheck", () => <SVG color={"white"} size={24} {...spellcheck} />)
  .add("stars", () => <SVG color={"white"} size={24} {...stars} />)
  .add("store", () => <SVG color={"white"} size={24} {...store} />)
  .add("subject", () => <SVG color={"white"} size={24} {...subject} />)
  .add("supervised user circle", () => (
    <SVG color={"white"} size={24} {...supervisedUserCircle} />
  ))
  .add("supervisor account", () => (
    <SVG color={"white"} size={24} {...supervisorAccount} />
  ))
  .add("swap horizontal", () => (
    <SVG color={"white"} size={24} {...swapHorizontal} />
  ))
  .add("swap horizontal circle", () => (
    <SVG color={"white"} size={24} {...swapHorizontalCircle} />
  ))
  .add("swap vertical", () => (
    <SVG color={"white"} size={24} {...swapVertical} />
  ))
  .add("swap vertical circle", () => (
    <SVG color={"white"} size={24} {...swapVerticalCircle} />
  ))
  .add("sync alt", () => <SVG color={"white"} size={24} {...syncAlt} />)
  .add("system update", () => (
    <SVG color={"white"} size={24} {...systemUpdate} />
  ))
  .add("tab", () => <SVG color={"white"} size={24} {...tab} />)
  .add("tab unselected", () => (
    <SVG color={"white"} size={24} {...tabUnselected} />
  ))
  .add("text rotate up", () => (
    <SVG color={"white"} size={24} {...textRotateUp} />
  ))
  .add("text rotate vertical", () => (
    <SVG color={"white"} size={24} {...textRotateVertical} />
  ))
  .add("text rotate angle down", () => (
    <SVG color={"white"} size={24} {...textRotateAngleDown} />
  ))
  .add("text rotate angle up", () => (
    <SVG color={"white"} size={24} {...textRotateAngleUp} />
  ))
  .add("text rotate down", () => (
    <SVG color={"white"} size={24} {...textRotateDown} />
  ))
  .add("text rotate none", () => (
    <SVG color={"white"} size={24} {...textRotateNone} />
  ))
  .add("theaters", () => <SVG color={"white"} size={24} {...theaters} />)
  .add("thumbs down", () => <SVG color={"white"} size={24} {...thumbsDown} />)
  .add("thumbs up", () => <SVG color={"white"} size={24} {...thumbsUp} />)
  .add("thumbs up/down", () => (
    <SVG color={"white"} size={24} {...thumbsUpDown} />
  ))
  .add("timeline", () => <SVG color={"white"} size={24} {...timeline} />)
  .add("toc", () => <SVG color={"white"} size={24} {...toc} />)
  .add("today", () => <SVG color={"white"} size={24} {...today} />)
  .add("toll", () => <SVG color={"white"} size={24} {...toll} />)
  .add("touch app", () => <SVG color={"white"} size={24} {...touchApp} />)
  .add("track changes", () => (
    <SVG color={"white"} size={24} {...trackChanges} />
  ))
  .add("translate", () => <SVG color={"white"} size={24} {...translate} />)
  .add("trending down", () => (
    <SVG color={"white"} size={24} {...trendingDown} />
  ))
  .add("trending flat", () => (
    <SVG color={"white"} size={24} {...trendingFlat} />
  ))
  .add("trending up", () => <SVG color={"white"} size={24} {...trendingUp} />)
  .add("update", () => <SVG color={"white"} size={24} {...update} />)
  .add("verified user", () => (
    <SVG color={"white"} size={24} {...verifiedUser} />
  ))
  .add("vertical split", () => (
    <SVG color={"white"} size={24} {...verticalSplit} />
  ))
  .add("view agenda", () => <SVG color={"white"} size={24} {...viewAgenda} />)
  .add("view array", () => <SVG color={"white"} size={24} {...viewArray} />)
  .add("view carousel", () => (
    <SVG color={"white"} size={24} {...viewCarousel} />
  ))
  .add("view column", () => <SVG color={"white"} size={24} {...viewColumn} />)
  .add("view day", () => <SVG color={"white"} size={24} {...viewDay} />)
  .add("view headline", () => (
    <SVG color={"white"} size={24} {...viewHeadline} />
  ))
  .add("view list", () => <SVG color={"white"} size={24} {...viewList} />)
  .add("view module", () => <SVG color={"white"} size={24} {...viewModule} />)
  .add("view quilt", () => <SVG color={"white"} size={24} {...viewQuilt} />)
  .add("view stream", () => <SVG color={"white"} size={24} {...viewStream} />)
  .add("view week", () => <SVG color={"white"} size={24} {...viewWeek} />)
  .add("visibility", () => <SVG color={"white"} size={24} {...visibility} />)
  .add("visibility off", () => (
    <SVG color={"white"} size={24} {...visibilityOff} />
  ))
  .add("voice over off", () => (
    <SVG color={"white"} size={24} {...voiceOverOff} />
  ))
  .add("watch later", () => <SVG color={"white"} size={24} {...watchLater} />)
  .add("work", () => <SVG color={"white"} size={24} {...work} />)
  .add("work off", () => <SVG color={"white"} size={24} {...workOff} />)
  .add("work outline", () => <SVG color={"white"} size={24} {...workOutline} />)
  .add("youtube search", () => (
    <SVG color={"white"} size={24} {...youtubeSearch} />
  ))
  .add("zoom in", () => <SVG color={"white"} size={24} {...zoomIn} />)
  .add("zoom out", () => <SVG color={"white"} size={24} {...zoomOut} />);
