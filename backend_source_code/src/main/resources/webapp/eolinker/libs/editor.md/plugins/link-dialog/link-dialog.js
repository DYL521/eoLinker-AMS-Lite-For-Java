!function(){var t=function(t){var e="link-dialog";t.fn.linkDialog=function(){var t,i=this.cm,a=this.editor,l=this.settings,o=i.getSelection(),n=this.lang,r=n.dialog.link,d=this.classPrefix,c=d+e;if(i.focus(),a.find("."+c).length>0)t=a.find("."+c),t.find("[data-url]").val("http://"),t.find("[data-title]").val(o),this.dialogShowMask(t),this.dialogLockScreen(),t.show();else{var s='<div class="'+d+'form"><label>'+r.url+'</label><input type="text" value="http://" data-url /><br/><label>'+r.urlTitle+'</label><input type="text" value="'+o+'" data-title /><br/></div>';t=this.createDialog({title:r.title,width:380,height:211,content:s,mask:l.dialogShowMask,drag:l.dialogDraggable,lockScreen:l.dialogLockScreen,maskStyle:{opacity:l.dialogMaskOpacity,backgroundColor:l.dialogMaskBgColor},buttons:{enter:[n.buttons.enter,function(){var t=this.find("[data-url]").val(),e=this.find("[data-title]").val();if("http://"===t||""===t)return!1;var a="["+e+"]("+t+' "'+e+'")';return""==e&&(a="["+t+"]("+t+")"),i.replaceSelection(a),this.hide().lockScreen(!1).hideMask(),!1}],cancel:[n.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})}}};"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=t:t(window.editormd)}();