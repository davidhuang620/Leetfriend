import React from 'react';
import './Cards.css';

const Card = () => {
   return (
      <article className="center mw7 br3 hidden ba b--black-10 mv4">
         <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Today's Challenge</h1>
         <div className="pa3 bt b--black-10">
            <div class="pa4 lh-copy">
               <a class="f2 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black"
                  href="https://leetcode.com/problems/rotate-list/">
                  61. Rotate List
               </a>
            </div>
            <p className="center f3 lh-copy measure">
               Linked list
                &nbsp;&nbsp;&nbsp;
               Medium
            </p>
            <p className="center f6 f5-ns lh-copy measure">
               2019.1.24 |
               By Ardian
            </p>
         </div>
      </article>
   )
}

export default Card;
