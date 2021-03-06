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
?>

<!-- FOOTER -->
<footer id="t3-footer" class="container t3-footer">
  <div class="main-container footer-sl-container">
    <div class="row">
    <?php 

    if ($this->checkSpotlight('footnav', 'footer-1, footer-2, footer-3, footer-4, footer-5, footer-6')) : ?>
      <div class="t3-sl t3-sl-3">
        <?php $this->spotlight('footnav', 'footer-1, footer-2, footer-3, footer-4, footer-5, footer-6') ?>
      </div>
    <?php endif ?>
    </div>
  </div>

  <?php if ($this->countModules('footer-map')) : ?>
    <div class="footer-map<?php $this->_c('footer-map') ?>">
      <jdoc:include type="modules" name="<?php $this->_p('footer-map') ?>" style="raw" />
    </div>
  <?php
   
  endif 
  ?>
  <section class="t3-copyright main-container">
   
      
          <!--<div class="<?php //echo $this->getParam('t3-rmvlogo', 1) ? 'col-md-8' : 'col-md-12' ?> copyright <?php //$this->_c('footer') ?>">-->
        <jdoc:include type="modules" name="<?php $this->_p('footer') ?>" />
      <!--</div>-->
       <!--<div class="row">-->
      <?php if ($this->getParam('t3-rmvlogo', 1)): ?>
        <div class="col-md-4 poweredby text-hide">
          <a class="t3-logo t3-logo-color" href="http://t3-framework.org" title="<?php echo JText::_('T3_POWER_BY_TEXT') ?>"
             target="_blank" <?php echo method_exists('T3', 'isHome') && T3::isHome() ? '' : 'rel="nofollow"' ?>><?php echo JText::_('T3_POWER_BY_HTML') ?></a>
        </div>
      <?php endif; ?>
        
<!-- <div class="row">
                    <div class="col-md-12">
                        <div class="footer-copyright">© 2014 ITgalore. All rights reserved.</div>
                    </div>
                </div>-->
    <!--</div>-->
  </section>
</footer>
<!-- //FOOTER -->