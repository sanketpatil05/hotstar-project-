 import "./footer.css"
 import {Link} from "react-router-dom"
export const Footer = () =>{
    return (
        <div className = "footer">
           <div className = "left_footer">
               <div>
                   <span>About Disney+ Hotstar</span>
                   <span>Term of Use</span>
                   <span>Privacy Policy</span>
                   <span>FAQ</span>
                   <span>Feedback</span>
                   <span>career</span>
               </div> 
               <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
           </div>
           <div className = "right_footer">
               <div className = "contact">
                   <p>Contact with Us </p>
                   <a href = "https://www.facebook.com/DisneyPlusHotstar" target="_blank" rel="noreferrer noopener"><span><i class="fa-brands fa-facebook-square"></i></span></a>
                   <a href = "https://twitter.com/DisneyPlusHS" target="_blank" rel="noreferrer noopener"><span><i class="fa-brands fa-twitter-square"></i></span></a>
                   

               </div>
               <div className = "store">
                   <p>Disney+ Hotstar App</p>
                   <a href = "https://play.google.com/store/apps/details?id=in.startv.hotstar" target="_blank" rel="noreferrer noopener"><span><i class="fa-brands fa-google-play"></i>Google Play</span></a>
                   <a href = "https://apps.apple.com/in/app/hotstar/id934459219" target="_blank" rel="noreferrer noopener" ><span><i class="fa-brands fa-apple"></i>Apple Store</span></a>

               </div>
           </div>
        </div>
    )
}