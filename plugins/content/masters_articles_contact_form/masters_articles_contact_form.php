<?php
/*
@plugin		Masters Articles Contact Form
@since		1.0
@joomla		2.5 & 3
@author		Christopher Masters
@email		chrismasterswebsolutions.com
@website	http://www.masterswebsolutions.com
@copyright	Copyright (c) 2011 - 2012 Christopher Masters DBA Masters Web Solutions. All Rights Reserved. 
@license	GNU/GPL 2, http://www.gnu.org/licenses/gpl-2.0.html
*/
 
// No direct access
defined('_JEXEC') or die('Restricted access');

jimport('joomla.plugin.plugin');

class plgContentMasters_Articles_Contact_Form extends JPlugin {

	function __construct( &$contactIdject, $params ) {
	
		parent::__construct($contactIdject, $params);
		$this->loadLanguage();
		$this->regex = '/{masterscontactform:(.+?)}/'; 
	}
	
	function onContentPrepare( $context, &$article, &$params, $limitstart = 1 ) {

		preg_match_all($this->regex, $article->text, $results, PREG_PATTERN_ORDER); //var_dump($results);
		if(count($results[0]) > 0) {
			
			for ($i=0; $i < count($results[0]); $i++) {
				
				$subArray = array();
				$subArray = explode("|",$results[1][$i]); //var_dump($subArray);
				
				$contactId = ($subArray[0] == '' || $subArray[0] == NULL) ? 0 : $subArray[0];
				if( isset($subArray[1]) ) {
					$itemId = ($subArray[1] == '' || $subArray[1] == NULL) ? 0 : $subArray[1]; //echo $itemId;
				}
				$itemId = isset($itemId) ? '&Itemid='.$itemId : NULL;
				 
				// Get Contact Details from Contact Component
				$query = 'SELECT * FROM #__contact_details'.
				' WHERE id = '.$contactId.
				' AND published = 1';
				
				$contactInfo = $this->_getObject($query);
				
				// Set contact form link
				if( isset($contactInfo->email_to) ) {
				
					$contactFormLink = 'index.php?option=com_contact&view=contact&id='.$contactId.$itemId.'&tmpl=component';
					$contactFormLink = JFilterOutput::ampReplace($contactFormLink);
					
					$contactFormOutput = '<iframe id="contact-form" onload="setIframeHeight(this.id)" src="'.$contactFormLink.'" scrolling="no" style="border:none;width:100%;"></iframe>';
					
					$script = 'function setIframeHeight( iframeId ){var ifDoc, ifRef = document.getElementById( iframeId );try{ifDoc = ifRef.contentWindow.document.documentElement;}catch( e ){try{ifDoc = ifRef.contentDocument.documentElement;}catch(ee){}}if( ifDoc ){ifRef.height = 1;ifRef.height = ifDoc.scrollHeight;}}';
					$doc =& JFactory::getDocument();
					$doc->addScriptDeclaration($script);
					
					$article->text = preg_replace($this->regex, $contactFormOutput, $article->text, 1);
				}
			}
		}
		
		return true;
	}
	public function _getObject( $query ) {

		$db = JFactory::getDbo();
		$db->setQuery($query);
		$result = $db->loadObject();

		return $result;
	}
}
?>