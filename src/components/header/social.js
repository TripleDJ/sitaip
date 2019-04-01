import React, { Component } from 'react';

class SocialLinks extends Component {
  render() {
    return (
      <div class="social_wrapper">
        <ul>
          <li class="facebook">
            <a target="_blank" href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>

          <li class="twitter">
            <a target="_blank" href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          
          <li class="pinterest">
            <a target="_blank" title="Pinterest" href="#">
              <i class="fa fa-pinterest"></i>
            </a>
          </li>
          
          <li class="instagram">
            <a target="_blank" title="Instagram" href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialLinks;
