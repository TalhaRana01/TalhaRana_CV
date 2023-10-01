
import"./App.css"

// JSX
//  1. html main agr kisi ka closing tag nhi ha to hum ny react main closing tag dena
// hai

function App() {
  return (
    

    <section className="resume">
      <div className="resume_left">
        <div className="r_profile_pic">
          <img src="Talharana.jpg" alt="profile_pic" />
        </div>
        <div className="r_left_sub">
          <div className="r_aboutme">
            <h2>About me</h2>
            <p>Full Stack MERN Develper</p>
          </div>
          <div className="r_skills">
            <h2>Skills</h2>
            <ul>
              <li>
                <p><i className="fa-solid fa-code"></i></p>
                <p>Web Development</p>
              </li>
              <li>
                <p><i className="fa-solid fa-pen-nib"></i></p>
                <p>Web Designing</p>
              </li>
              <li>
                <p><i className="fa-solid fa-video"></i></p>
                <p>Graphic Designing</p>
              </li>
              <li>
                <p><i className="fa-solid fa-people-group"></i></p>
                <p>Digital Marketer</p>
              </li>
              <li>
                <p><i className="fa-solid fa-image"></i></p>
                <p>Photoshop Editing</p>
              </li>
            </ul>
          </div>
          <div className="r_hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li>
                <p><i className="fa-solid fa-football"></i></p>
              </li>
              <li>
                <p><i className="fa-solid fa-plant-wilt"></i></p>
              </li>
              <li>
                <p><i className="fa-solid fa-book"></i></p>
              </li>
              <li>
                <p><i className="fa-solid fa-bicycle"></i></p>
              </li>
              <li>
                <p><i className="fa-solid fa-chess"></i></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume_right">
        <div className="r_namerole">
          <p>Talha </p>
          <p>Rana</p>
          <p className="role"> FULL STACK MERN DEVELOPER</p>
        </div>
        <div className="r_info">
          <ul>
            <li>
              <p>mtalharana093@gmail.com
              </p>
            </li>
            <li>
              <p>+923009222193</p>
            </li>
          </ul>
        </div>
        <div className="r_right_sub">
          <div className="r_education">
            <h2>Education</h2>
            <ul>
              <li>
                <div className="r_ed_left">
                  <p>2010-2012</p>
                </div>
                <div className="r_ed_right">
                  <p>Marticulation</p>
                  <p>BISE Mirpurkhas </p>
                </div>
              </li>
              <li>
                <div className="r_ed_left">
                  <p>2012-2014</p>
                </div>
                <div className="r_ed_right">
                  <p>Inermediate </p>
                  <p> Passed Intermediate from BISE Hyderabad</p>
                </div>
              </li>
              <li>
                <div className="r_ed_left">
                  <p>2014-2019</p>
                </div>
                <div className="r_ed_right">
                  <p>BS Computer Science</p>
                  <p> BS Computer Science From Sindh Jamshoro Univeristy</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="r_jobs">
            <h2>Work Experience</h2>
            <ul>
              <li>
                <div className="r_ed_left">
                  <p>2015-2017</p>
                </div>
                <div className="r_ed_right">
                  <p>HTML & CSS</p>
                  <p> I have two years of experience and  also created custom website  design in HTML, CSS and BOOTSTRAP </p>
                </div>
              </li>
              <li>
                <div className="r_ed_left">
                  <p>2017-2019</p>
                </div>
                <div className="r_ed_right">
                  <p>SHOPIFY and  WORDPRESS</p>
                  <p> I have done multiple projects in WORDPRESS AND SHOPIFY </p>
                </div>
              </li>
              <li>
                <div className="r_ed_left">
                  <p>2019-2022</p>
                </div>
                <div className="r_ed_right">
                  <p>FULL STACK MERN DEVELOPER</p>
                  <p> I am learning Javascript, React JS, Node JS and React Native JS</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
)






}

export default App;
