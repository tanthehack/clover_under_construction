import './App.css';
import image from './assets/illustration.png';
import footerImg from './assets/logo2.png';

const App = () => {
  return (
    <>
      <main>
        <img className="illustration" src={image} alt="clover under construction illustration" />
        <div className='text'>
          <h1>Website Under <br /> Construction!</h1>
          <div className="socials">
            <p>in the mean time, <br></br>
              check out our socials
            </p>

            <div className="socials-links">
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.625 2.8125H9.375C7.63509 2.81436 5.96697 3.50636 4.73667 4.73667C3.50636 5.96697 2.81436 7.63509 2.8125 9.375V20.625C2.81436 22.3649 3.50636 24.033 4.73667 25.2633C5.96697 26.4936 7.63509 27.1856 9.375 27.1875H20.625C22.3649 27.1856 24.033 26.4936 25.2633 25.2633C26.4936 24.033 27.1856 22.3649 27.1875 20.625V9.375C27.1856 7.63509 26.4936 5.96697 25.2633 4.73667C24.033 3.50636 22.3649 2.81436 20.625 2.8125ZM15 20.625C13.8875 20.625 12.7999 20.2951 11.8749 19.677C10.9499 19.0589 10.2289 18.1804 9.80318 17.1526C9.37744 16.1248 9.26604 14.9938 9.48308 13.9026C9.70013 12.8115 10.2359 11.8092 11.0225 11.0225C11.8092 10.2359 12.8115 9.70013 13.9026 9.48308C14.9938 9.26604 16.1248 9.37744 17.1526 9.80318C18.1804 10.2289 19.0589 10.9499 19.677 11.8749C20.2951 12.7999 20.625 13.8875 20.625 15C20.6234 16.4914 20.0303 17.9212 18.9758 18.9758C17.9212 20.0303 16.4914 20.6234 15 20.625ZM22.0312 9.375C21.7531 9.375 21.4812 9.29253 21.25 9.138C21.0187 8.98348 20.8385 8.76386 20.732 8.5069C20.6256 8.24994 20.5978 7.96719 20.652 7.6944C20.7063 7.42162 20.8402 7.17105 21.0369 6.97438C21.2335 6.77771 21.4841 6.64378 21.7569 6.58952C22.0297 6.53526 22.3124 6.56311 22.5694 6.66954C22.8264 6.77598 23.046 6.95622 23.2005 7.18748C23.355 7.41874 23.4375 7.69062 23.4375 7.96875C23.4375 8.34171 23.2893 8.6994 23.0256 8.96312C22.7619 9.22684 22.4042 9.375 22.0312 9.375ZM18.75 15C18.75 15.7417 18.5301 16.4667 18.118 17.0834C17.706 17.7001 17.1203 18.1807 16.4351 18.4645C15.7498 18.7484 14.9958 18.8226 14.2684 18.6779C13.541 18.5333 12.8728 18.1761 12.3483 17.6516C11.8239 17.1272 11.4667 16.459 11.3221 15.7316C11.1774 15.0042 11.2516 14.2502 11.5355 13.5649C11.8193 12.8797 12.2999 12.294 12.9166 11.882C13.5333 11.4699 14.2583 11.25 15 11.25C15.9946 11.25 16.9484 11.6451 17.6516 12.3483C18.3549 13.0516 18.75 14.0054 18.75 15Z" />
                </svg>
              </a>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.7883 9.10078L25.2844 12.6047C24.5766 20.8102 17.6566 27.1875 9.375 27.1875C7.67344 27.1875 6.2707 26.918 5.20547 26.3859C4.34649 25.9559 3.99492 25.4953 3.90703 25.3641C3.82866 25.2465 3.77787 25.1128 3.75844 24.9729C3.73901 24.833 3.75145 24.6905 3.79484 24.556C3.83822 24.4216 3.91143 24.2987 4.00898 24.1965C4.10653 24.0944 4.22592 24.0156 4.3582 23.966C4.38867 23.9543 7.19883 22.875 8.9836 20.8207C7.99381 20.0069 7.12978 19.0513 6.41953 17.9848C4.96641 15.8273 3.33984 12.0797 3.84141 6.4793C3.85731 6.30134 3.92372 6.13164 4.03284 5.99016C4.14195 5.84869 4.28922 5.74134 4.4573 5.68076C4.62537 5.62018 4.80726 5.60889 4.98154 5.64821C5.15583 5.68754 5.31524 5.77584 5.44102 5.90273C5.48203 5.94375 9.34102 9.78164 14.059 11.0262V10.3125C14.0572 9.56413 14.2052 8.82297 14.4942 8.13266C14.7832 7.44235 15.2074 6.81684 15.7418 6.29297C16.2608 5.77468 16.8784 5.3656 17.5581 5.08986C18.2378 4.81412 18.9658 4.67731 19.6992 4.6875C20.6831 4.6972 21.6477 4.96131 22.4993 5.45415C23.3508 5.94698 24.0604 6.65177 24.559 7.5H28.125C28.3105 7.49985 28.4919 7.55476 28.6462 7.65776C28.8005 7.76077 28.9208 7.90724 28.9918 8.07863C29.0629 8.25003 29.0814 8.43865 29.0452 8.6206C29.009 8.80255 28.9195 8.96967 28.7883 9.10078Z" />
                </svg>
              </a>
              <a href="">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0V24.3799H25V0H0ZM3.88492 7.87317H10.2448C10.8954 7.8783 11.5793 8.15986 12.1033 8.70246C12.5857 9.23835 12.869 10.0069 12.883 10.8298C12.8806 11.4617 12.7736 12.1898 12.4008 12.77C12.1403 13.1646 11.7324 13.463 11.2824 13.6336V13.7006C11.7563 13.8339 12.2235 14.1188 12.5565 14.5899C12.9526 15.1663 13.088 15.9436 13.0997 16.7087C13.0949 17.5203 12.8452 18.3894 12.2864 19.0334C11.7896 19.5826 11.0764 19.8969 10.3256 19.9142H3.88479L3.88492 7.87317ZM15.0299 7.89722H19.7601V9.87171H15.0299V7.89722ZM17.2943 10.4623C17.9543 10.4624 18.5398 10.5588 19.0506 10.7525C19.5659 10.9405 19.9996 11.2345 20.3522 11.6333C20.7047 12.0264 20.9709 12.5277 21.1517 13.1374C21.3902 13.9354 21.4354 14.957 21.4309 15.8897H15.9316C15.9316 16.5278 16.0443 17.0233 16.2703 17.3765C16.5009 17.7241 16.8782 17.8968 17.4025 17.8968C17.9007 17.8942 18.4843 17.7144 18.6766 17.0846C18.7264 16.9194 18.7514 16.7438 18.7514 16.5558H21.4309C21.4253 17.5139 21.1511 18.4655 20.433 19.1707C19.6395 19.8969 18.5306 20.1041 17.4636 20.1271C16.8036 20.1271 16.2071 20.0335 15.6737 19.8455C15.1449 19.6518 14.6955 19.355 14.3248 18.9561C13.9541 18.5573 13.6692 18.056 13.4703 17.4521C13.2714 16.8424 13.1713 16.1222 13.1713 15.2904C13.1713 14.4814 13.2683 13.7757 13.4627 13.1717C13.6571 12.5678 13.9326 12.0665 14.2897 11.6676C14.6514 11.2631 15.085 10.9605 15.5913 10.7611C16.1021 10.5617 16.6705 10.4623 17.2943 10.4623ZM6.95035 10.5138V12.5639H9.05915C9.24923 12.5623 9.4301 12.4643 9.56727 12.2909C9.70048 12.1084 9.76577 11.868 9.77021 11.6161V11.4444C9.76883 11.2172 9.69121 10.9824 9.55965 10.7868C9.44008 10.6279 9.26073 10.5253 9.05917 10.5138H6.95035ZM17.4026 12.6841C16.937 12.6841 16.5894 12.8238 16.3589 13.103C16.1328 13.3822 15.9951 13.761 15.9453 14.2396H18.6431C18.6431 13.7553 18.535 13.3765 18.3181 13.103C18.1011 12.8238 17.7958 12.6841 17.4026 12.6841ZM6.95035 15.0518V17.1104H9.2819C9.46983 17.1087 9.64977 17.0117 9.79002 16.846C9.92258 16.6643 9.99112 16.4227 9.99448 16.1712V15.9909C9.99327 15.7616 9.92721 15.5225 9.79002 15.3248C9.6696 15.1649 9.48317 15.0647 9.2819 15.0518H6.95035Z" />
                </svg>
              </a>
            </div>

          </div>
        </div>
        <div className="footer">
          <img src={footerImg} alt="" />
          <hr />
        </div>
      </main>
    </>
  )
}

export default App;