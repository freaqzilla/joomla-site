<?php
/*
# ------------------------------------------------------------------------
# Extensions for Joomla 2.5.x - Joomla 3.x
# ------------------------------------------------------------------------
# Copyright (C) 2011-2013 Ext-Joom.com. All Rights Reserved.
# @license - PHP files are GNU/GPL V2.
# Author: Ext-Joom.com
# Websites:  http://www.ext-joom.com 
# Date modified: 20/08/2013 - 13:00
# ------------------------------------------------------------------------
*/

// no direct access
defined('_JEXEC') or die;
if ($ext_load_scripts == 2) { 
	if ($ext_load_jquery > 0) { 
		echo '<script src="http://ajax.googleapis.com/ajax/libs/jquery/'.$ext_jquery_ver.'/jquery.min.js" type="text/javascript"></script>';
		} 
	if ($ext_load_easing > 0) {
		echo '<script type = "text/javascript" src = "'.JURI::root().'/modules/mod_ext_quick_contact_form_jquery/assets/js/jquery.validate.min.js"></script>';
		}

	echo '<script type = "text/javascript">if (jQuery) jQuery.noConflict();</script>';
}

if ($ext_script_required == '' OR $ext_script_required == ' ') { $ext_script_required = JText::_(SCRIPT_REQUIRED); }
if ($ext_script_email == '' OR $ext_script_email == ' ') { $ext_script_email = JText::_(SCRIPT_EMAIL); }
if ($ext_script_minlength == '' OR $ext_script_minlength == ' ') { $ext_script_minlength = JText::_(SCRIPT_MINLENGTH); }
if ($ext_recaptcha_message == '' OR $ext_recaptcha_message == ' ') { $ext_recaptcha_message = JText::_(RECAPTCHA_MESSAGE); }
?>

<script type="text/javascript">
jQuery(function(){	
	jQuery("#ext_form_<?php echo $ext_id; ?>").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			email: {
				required: true,
				email: true
			},
			subject: {
				required: true,
				minlength: 3
			},
			message: {
				required: true
			}
		},
		messages: {
			name: {
				required: '<?php echo $ext_script_required; ?>',
				minlength: '<?php echo $ext_script_minlength; ?> 3'
			},
			email: '<?php echo $ext_script_email; ?>',
			subject: {
				required: '<?php echo $ext_script_required; ?>',
				minlength: '<?php echo $ext_script_minlength; ?> 3'
			},
			message: {
				required: '<?php echo $ext_script_required; ?>'
			}
		},
		success: function(label) {
			label.html('OK').removeClass('error').addClass('ok');
			setTimeout(function(){
				label.fadeOut(500);
			}, 2000)
		}
	});
	
});
</script>

<div class="mod_ext_quick_contact_form_jquery <?php echo $moduleclass_sfx ?>">

<?php
// check
if(isset($_POST['extsend']) AND isset($_POST["recaptcha_response_field"]) ) {	
	
	
	$resp = recaptcha_check_answer ($privatekey,
                                        $_SERVER["REMOTE_ADDR"],
                                        $_POST["recaptcha_challenge_field"],
                                        $_POST["recaptcha_response_field"]);
	
	
	$name 		= clearData($_POST["name"]);
	$email 		= clearData($_POST["email"]);
	$subject  	= clearData($_POST["subject"]);
	$message 	= clearData($_POST["message"], "string_msg");

	

	
	if (!isEmail($email)) {
		if ($ext_error_email == '' OR $ext_error_email == ' ') {
			$errMsg= JText::_(ERROREMAIL);
		} else {
			$errMsg = $ext_error_email;
			}

	}
	
	if ( $name=="" OR  $email=="" OR $subject=="" OR $message=="") {
		if($ext_error_field == '' OR $ext_error_field == ' ') {
			$errMsg = JText::_(ERRORFIELD);
		} else {
			$errMsg = $ext_error_field;
			}
	}
	
	


	if($errMsg == '' AND $resp->is_valid) {
		if(get_magic_quotes_gpc()) {
			$message = stripslashes($message);
		}
		$msg     = "$ext_name_label  $name \r\n $ext_email_label  $email \r\n $ext_subject_label $subject \r\n\n" . "$ext_message_label \r\n$message";
		$headers= "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=utf-8\r\n";
		$headers .= "From: $email\r\n";
		$headers .= "Reply-To: $email\r\n";
		//$headers .= "Return-Path: $email\r\n";

		mail($ext_my_email, $subject, $msg, $headers);
	

?>
		<div style="text-align:center;">
			<p>
			<?php 
			echo $ext_send_message=='' ? JText::_(SENDMESSAGE) : $ext_send_message;
			?>
			</p>
		<div style="clear:both;"></div>
		</div>
<?php
	} else {
		$errMsg = $ext_recaptcha_message;
		}
}

if(!isset($_POST['extsend']) || $errMsg != '') {
?>	
	<div class="ext_quick_contact_form_jquery">
		<?php 
		if ($errMsg != ''){ 
			echo '<p>'.$errMsg.'</p>';
		}
		?>
		<form id="ext_form_<?php echo $ext_id;?>" class="blocks" action="" method="post">
			<p>
				<label><?php echo $ext_name_label;?></label>
				<input type="text" class="text" name="name" />
			</p>
			<p>
				<label><?php echo $ext_email_label;?></label>
				<input type="text" class="text" name="email" />
			</p>
			<p>
				<label><?php echo $ext_subject_label;?></label>
				<input type="text" class="text" name="subject" />
			</p>
			<p class="area">
				<label><?php echo $ext_message_label;?></label>
				<textarea class="textarea" name="message"></textarea>
			</p>
			<p>
				<?php echo recaptcha_get_html($publickey, $error); ?>
			</p>
			<p>
				<label>&nbsp;</label>
				<input type="submit" class="btn" value="<?php echo $ext_send_label;?>"  name="extsend" />				
			</p>
			
		</form>	
	</div>

<?php
}
?>
	<div style="clear:both;"></div>
</div>