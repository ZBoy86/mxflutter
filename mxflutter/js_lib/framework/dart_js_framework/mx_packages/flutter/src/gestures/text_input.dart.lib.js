//  MXFlutterFramework
//  Copyright 2019 The MXFlutter Authors. All rights reserved.
//
//  Use of this source code is governed by a MIT-style license that can be
//  found in the LICENSE file.

"use strict";

let frameworkExports = require("js_flutter_framework.js");
let basicExports = require("js_flutter_basic_types.js");
let materialExports = require("js_flutter_material.js");
let layoutExports = require("js_flutter_layout.js");
let textExports = require("js_flutter_text.js");
let imageExports = require("js_flutter_image.js");
let animationExports = require("js_flutter_animation.js");
let {platform_channel} = require("message_channel/js_flutter_message_channel.js");


let src__services__text_input = Object.create(null);
src__services__text_input.TextInputType = textExports.TextInputType;
src__services__text_input.TextCapitalization = textExports.TextCapitalization;
src__services__text_input.TextInputAction = textExports.TextInputAction;
exports.src__services__text_input = src__services__text_input;
