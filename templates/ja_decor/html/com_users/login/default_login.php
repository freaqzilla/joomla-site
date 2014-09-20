<?php
/**
 * ------------------------------------------------------------------------
 * JA Decor Template
 * ------------------------------------------------------------------------
 * Copyright (C) 2004-2011 J.O.O.M Solutions Co., Ltd. All Rights Reserved.
 * @license - Copyrighted Commercial Software
 * Author: J.O.O.M Solutions Co., Ltd
 * Websites:  http://www.joomlart.com -  http://www.joomlancers.com
 * This file may not be redistributed in whole or significant part.
 * ------------------------------------------------------------------------
 */

defined('_JEXEC') or die;

JHtml::_('behavior.keepalive');
?>

<div class="login-wrap">

  <div class="login <?php echo $this->pageclass_sfx?>">
  	<?php if ($this->params->get('show_page_heading')) : ?>
  	<div class="page-header">
  			<?php echo $this->escape($this->params->get('page_heading')); ?>
  	</div>
  	<?php endif; ?>

  	<?php if (($this->params->get('logindescription_show') == 1 && str_replace(' ', '', $this->params->get('login_description')) != '') || $this->params->get('login_image') != '') : ?>
  	<div class="login-description">
  	<?php endif; ?>

  		<?php if($this->params->get('logindescription_show') == 1) : ?>
  			<?php echo $this->params->get('login_description'); ?>
  		<?php endif; ?>

  		<?php if (($this->params->get('login_image')!='')) :?>
  			<img src="<?php echo $this->escape($this->params->get('login_image')); ?>" class="login-image" alt="<?php echo JTEXT::_('COM_USER_LOGIN_IMAGE_ALT')?>"/>
  		<?php endif; ?>

  	<?php if (($this->params->get('logindescription_show') == 1 && str_replace(' ', '', $this->params->get('login_description')) != '') || $this->params->get('login_image') != '') : ?>
  	</div>
  	<?php endif; ?>

  	<form action="<?php echo JRoute::_('index.php?option=com_users&task=user.login'); ?>" method="post" class="form-horizontal">
  		
      <fieldset>
  			<div class="login-group-inputs">
          <?php foreach ($this->form->getFieldset('credentials') as $field): ?>
            <?php if (!$field->hidden): ?>
              <div class="form-group form-group-input">
                  <?php echo $field->input; ?>
              </div>
            <?php endif; ?>
          <?php endforeach; ?>
		
			<?php $tfa = JPluginHelper::getPlugin('twofactorauth'); ?>

			<?php if (!is_null($tfa) && $tfa != array()): ?>
				<div class="form-group form-group-input">
					<?php echo $this->form->getField('secretkey')->input; ?>
				</div>
			<?php endif; ?>
          
        </div>
			
			
			
			 <?php if (JPluginHelper::isEnabled('system', 'remember')) : ?>
       <div class="form-group form-remember">
          <div class="checkbox">
            <label>
              <input id="remember" type="checkbox" name="remember" value="yes"/> 
              <?php echo JText::_(version_compare(JVERSION, '3.0', 'ge') ? 'COM_USERS_LOGIN_REMEMBER_ME' : 'JGLOBAL_REMEMBER_ME') ?>
            </label>
          </div>
      </div>
      <?php endif; ?>
  			<div class="form-group form-btn">
  					<button type="submit" class="btn btn-primary btn-block"><?php echo JText::_('JLOGIN'); ?></button>

  			</div>
  			<input type="hidden" name="return" value="<?php echo base64_encode($this->params->get('login_redirect_url', $this->form->getValue('return'))); ?>" />
  			<?php echo JHtml::_('form.token'); ?>
  		</fieldset>

      
       <div class="other-links form-group">
        <ul>
          <li><a href="<?php echo JRoute::_('index.php?option=com_users&view=reset'); ?>">
            <?php echo JText::_('COM_USERS_LOGIN_RESET'); ?></a></li>
          <?php
          $usersConfig = JComponentHelper::getParams('com_users');
          if ($usersConfig->get('allowUserRegistration')) : ?>
          <li><a href="<?php echo JRoute::_('index.php?option=com_users&view=registration'); ?>">
              <?php echo JText::_('COM_USERS_LOGIN_REGISTER'); ?></a></li>
          <?php endif; ?>
        </ul>
      </div>

  	</form>

  </div>

</div>