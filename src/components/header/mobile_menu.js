import React, { Component } from 'react';

class MobileMenu extends Component {
  render() {
    return (
    	<div class="mobile_menu_wrapper">
        <a id="close_mobile_menu" href="javascript:;">
          <i class="fa fa-close"></i>
        </a>
    
        <form role="search" method="get" name="searchform" id="searchform" action="../demo.html">
          <div>
            <input type="text" value="" name="s" id="s" autocomplete="off" placeholder="Search..."/>
            <button> 
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div id="autocomplete"></div>
        </form>
            
        <div class="menu-side-mobile-menu-container">
          <ul id="mobile_main_menu" class="mobile_main_nav">
            <li id="menu-item-383" class="megamenu col3 menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home current-menu-ancestor menu-item-has-children menu-item-383">
              <a href="../demo.html">Home</a>
              <ul class="sub-menu">
                <li id="menu-item-384" class="hidden menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-384">
                  <a href="about/index.html">Layout 1</a>
                  <ul class="sub-menu">
                    <li id="menu-item-385" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-385">
                      <a href="../demo.html">Fullwidth Slider</a>
                    </li>
                    <li id="menu-item-386" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-386">
                      <a href="index.html%3Flayout=fullwidth.html">3 Columns Slider</a>
                    </li>
                    <li id="menu-item-387" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-387">
                      <a href="index.html%3Flayout=fixedwidth.html">Fixed Width Slider</a>
                    </li>
                    <li id="menu-item-388" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-388">
                      <a href="index.html%3Flayout=fullwidth.html">Fullwidth</a>
                    </li>
                    <li id="menu-item-389" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-389">
                      <a href="index.html%3Flayout=list.html">List</a>
                    </li>
                  </ul>
                </li>

                <li id="menu-item-390" class="hidden menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-390">
                  <a href="about/index.html">Layout 2</a>
                  <ul class="sub-menu">
                    <li id="menu-item-391" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-391">
                      <a href="index.html%3Flayout=full_right_sidebar.html">Full Post + Grid Right Sidebar</a>
                    </li>
                    <li id="menu-item-392" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-392">
                      <a href="index.html%3Flayout=full_left_sidebar.html">Full Post + Grid Left Sidebar</a>
                    </li>
                    <li id="menu-item-393" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-393">
                      <a href="index.html%3Flayout=full_fullwidth.html">Full Post + Grid Fullwidth</a>
                    </li>
                    <li id="menu-item-394" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-394">
                      <a href="index.html%3Flayout=full_list.html">Full Post + List</a>
                    </li>
                  </ul>
                </li>

                <li id="menu-item-395" class="hidden menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-395">
                  <a href="about/index.html">Layout 3</a>
                  <ul class="sub-menu">
                    <li id="menu-item-396" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-396">
                      <a href="index.html%3Flayout=right_sidebar.html">Right Sidebar</a>
                    </li>
                    <li id="menu-item-397" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-397">
                      <a href="index.html%3Flayout=left_sidebar.html">Left Sidebar</a>
                    </li>
                    <li id="menu-item-398" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-398">
                      <a href="index.html%3Flayout=2cols.html">Grid 2 Columns</a>
                    </li>
                    <li id="menu-item-399" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-399">
                      <a href="index.html%3Flayout=3cols.html">Grid 3 Columns</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li id="menu-item-400" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-has-children menu-item-400">
              <a href="top-10-ingredients/index.html">Single Posts</a>
              <ul class="sub-menu">
                <li id="menu-item-401" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-401">
                  <a href="top-10-ingredients/index.html%3Flayout=right_sidebar.html">Right Sidebar Post</a>
                </li>
                <li id="menu-item-402" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-402">
                  <a href="top-10-ingredients/index.html%3Flayout=fullwidth.html">Fullwidth Post</a>
                </li>
                <li id="menu-item-403" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-403">
                  <a href="top-10-ingredients/index.html%3Flayout=left_sidebar.html">Left Sidebar Post</a>
                </li>
                <li id="menu-item-404" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-404">
                  <a href="beauty-of-nature/index.html">Gallery Post</a>
                </li>
                <li id="menu-item-405" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-405">
                  <a href="golden-snow-land/index.html">Video Post</a>
                </li>
                <li id="menu-item-406" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-406">
                  <a href="big-city-light/index.html">Music Post</a>
                </li>
              </ul>
            </li>

            <li id="menu-item-407" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-407">
              <a href="page-fullwidth/index.html">Pages</a>
              <ul class="sub-menu">
                <li id="menu-item-408" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-408">
                  <a href="page-fullwidth/index.html">Fullwidth Page</a>
                </li>
                <li id="menu-item-409" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-409">
                  <a href="page-right-sidebar/index.html">Right Sidebar Page</a>
                </li>
                <li id="menu-item-410" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-410">
                  <a href="page-left-sidebar/index.html">Left Sidebar Page</a>
                </li>
                <li id="menu-item-411" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-411">
                  <a href="page-background-header/index.html">Background Header Page</a>
                </li>
                <li id="menu-item-412" class="menu-item menu-item-type-post_type menu-item-object-galleries menu-item-has-children menu-item-412">
                  <a href="galleries/blog-post-gallery/index.html">Gallery </a>
                  <ul class="sub-menu">
                    <li id="menu-item-413" class="menu-item menu-item-type-post_type menu-item-object-galleries menu-item-413">
                      <a href="galleries/gallery-2-columns/index.html">Gallery 2 Columns</a>
                    </li>
                    <li id="menu-item-414" class="menu-item menu-item-type-post_type menu-item-object-galleries menu-item-414">
                      <a href="galleries/gallery-3-columns/index.html">Gallery 3 Columns</a>
                    </li>
                    <li id="menu-item-415" class="menu-item menu-item-type-post_type menu-item-object-galleries menu-item-415">
                      <a href="galleries/gallery-4-columns/index.html">Gallery 4 Columns</a>
                    </li>
                  </ul>
                </li>
                <li id="menu-item-416" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-416">
                  <a href="typography/index.html">Typography</a>
                </li>
              </ul>
            </li>

            <li id="menu-item-417" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-417">
              <a href="category/travel/index.html">Category</a>
            </li>
            <li id="menu-item-418" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-418">
              <a href="about/index.html">About</a>
            </li>
            <li id="menu-item-419" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-419">
              <a href="contact-me/index.html">Contact Me</a>
            </li>
            <li id="menu-item-420" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-420">
              <a href="theme-support-updates/index.html">Features </a>
              <ul class="sub-menu">
                <li id="menu-item-421" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-421">
                  <a href="theme-support-updates/index.html">Theme Support &#038; Updates</a>
                </li>
                <li id="menu-item-422" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-422">
                  <a href="demo-content-import/index.html">Demo Content Import</a>
                </li>
                <li id="menu-item-423" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-423">
                  <a href="10-slider-and-blog-layouts-combinations/index.html">20+ Slider and Blog Layouts</a>
                </li>
                <li id="menu-item-424" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-424">
                  <a href="277-2/index.html">Flexible Single Post Options</a>
                </li>
                <li id="menu-item-425" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-425">
                  <a href="custom-sidebar/index.html">Custom Sidebar</a>
                </li>
                <li id="menu-item-426" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-426">
                  <a href="theme-customizer/index.html">Theme Customizer</a>
                </li>
                <li id="menu-item-427" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-427">
                  <a href="instant-search/index.html">Instant Search</a>
                </li>
                <li id="menu-item-428" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-428">
                  <a href="side-menu/index.html">Side Menu</a>
                </li>
                <li id="menu-item-429" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-429">
                  <a href="google-mobile-friendly/index.html">Google Mobile Friendly</a>
                </li>
                <li id="menu-item-430" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-430">
                  <a href="theme-admin/index.html">Theme Admin</a>
                </li>
                <li id="menu-item-431" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-431">
                  <a href="shortcodes/index.html">Shortcodes</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>  

        <div class="page_content_wrapper">
          <div class="sidebar_wrapper">
            <div class="sidebar">
              <div class="content">
                <ul class="sidebar_widget">
                  <li id="text-8" class="widget widget_text">
                    <h2 class="widgettitle">About Me</h2>
                    <div class="textwidget">
                      <p>
                        <img src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/photography_2.jpg" alt="" />
                        {/* style="margin-bottom:10px;" */}
                        <br />
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.
                      </p>
                      <div>
                      {/* style="text-align:center;margin-top:10px;" */}
                        <img src="http://themegoodsthemes-pzbycso8wng.stackpathdns.com/letsblog/demo/wp-content/uploads/2015/07/signature.png"/>
                        {/* style="width:50%;height: auto;" */}
                      </div>
                    </div>
                  </li>

                  <li id="custom_instagram-6" class="widget Custom_Instagram">
                    <h2 class="widgettitle">
                      <span>Instagram</span>
                    </h2>
                    <ul class="flickr">
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0rThDfOo/">
                          <img src="https://scontent.cdninstagram.com/vp/94e37c617c12db569eb6fb4bff064511/5D2C67BF/t51.2885-15/e15/s150x150/30076312_2057139651228414_8955780928475496448_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0mN3DHxP/">
                          <img src="https://scontent.cdninstagram.com/vp/2573155125c50644ded9b4cc61b5327a/5D395F4B/t51.2885-15/e15/s150x150/30591194_219528078802776_8442942265462095872_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0kDnj9xJ/">
                          <img src="https://scontent.cdninstagram.com/vp/5452fbe363bfbbeb5e1de9efc8b71a85/5D329A4E/t51.2885-15/e15/s150x150/30601726_589584008071390_6626412841488351232_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0eAujxw0/">
                          <img src="https://scontent.cdninstagram.com/vp/e143ec7b6912e0e45973288cc7418577/5D2D8A3B/t51.2885-15/e15/s150x150/30079328_235005097058307_1414458517279997952_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0YGRjjCd/">
                          <img src="https://scontent.cdninstagram.com/vp/d884e46d79d6e23b39e8765194441259/5D35A331/t51.2885-15/e15/s150x150/30830906_371768236655648_8218516935617282048_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0WAbD1R4/">
                          <img src="https://scontent.cdninstagram.com/vp/b7b61799e5357f241d2ea131473371b4/5D43FB48/t51.2885-15/e15/s150x150/30592069_195795361037410_5639195040631750656_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0UeWDHv7/">
                          <img src="https://scontent.cdninstagram.com/vp/79f4f22473b8f83aedc47f3395c73ccd/5D30BE37/t51.2885-15/e15/s150x150/30605138_166132187438895_8357504701540859904_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0QyqjQAD/">
                          <img src="https://scontent.cdninstagram.com/vp/d9ab694af996c72af63a1f3789274aff/5D37CCB9/t51.2885-15/e15/s150x150/30084493_377913302690811_1929625671043121152_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="https://www.instagram.com/p/Bhn0PF4jFfs/">
                          <img src="https://scontent.cdninstagram.com/vp/773aef8ea9492a18bdb4d1a558588d6a/5D4B247D/t51.2885-15/e15/s150x150/30084652_1737914732936842_334353965518946304_n.jpg?_nc_ht=scontent.cdninstagram.com" width="75" height="75" alt="" />
                        </a>
                      </li>

                    </ul>
                    <br class="clear"/>
                  </li>                  

                  <li id="social_profiles_posts-8" class="widget Social_Profiles_Posts">
                    <h2 class="widgettitle">
                      <span>Follow Me On</span>
                    </h2>

                    <div class="textwidget">
                      <div class="social_wrapper shortcode light small">
                        <ul>
                          <li class="facebook">
                            <a target="_blank" title="Facebook" href="../demo.html#">
                              <i class="fa fa-facebook"></i>
                            </a>
                          </li>

                          <li class="twitter">
                            <a target="_blank" title="Twitter" href="http://twitter.com/#">
                              <i class="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li class="pinterest">
                            <a target="_blank" title="Pinterest" href="http://pinterest.com/#">
                              <i class="fa fa-pinterest"></i>
                            </a>
                          </li>
                          <li class="instagram">
                            <a target="_blank" title="Instagram" href="http://instagram.com/themegoodsphotography">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobileMenu;
