define(["Modernizr","createElement"],function(e,t){e.addTest("texttrackapi","function"==typeof t("video").addTextTrack),e.addTest("track","kind"in t("track"))});