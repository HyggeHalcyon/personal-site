import React from 'react'

const Socials = ({href, icons, text}) => {
    return (
        <li className="list-inline-item">
            <a className='text-center' target="_blank" rel="noreferrer" href={href}>
                <i className={icons}></i>
                <p> {text} </p>
            </a>
        </li>
    )
}

// https://codepen.io/Hyperplexed/pen/rNrJgrd
const Animation = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let interval = null;
    
    document.querySelector("#landing-title").onmouseover = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= event.target.dataset.value){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 2;
      }, 50);
    }
}

class Landing extends React.Component {
    componentDidMount() {
        Animation() // first ran when component is mounted
    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className='align-center text-center'>
                        <p className='nrp'> 5026221079 </p>
                        <h1 id="landing-title" data-value="Fawwaz Razani"> Fawwaz Razani </h1>
                        <hr />
        
                        <ul className="list-inline landing-page-socials">
                            <Socials text="LinkedIn" icons="fab fa-linkedin fa-3x" href="https://www.linkedin.com/in/fawwazrazani/" />
                            <Socials text="Github" icons="fab fa-github" href="https://github.com/HyggeHalcyon" />
                            <Socials text="CTFs" icons="fas fa-flag" href="https://hyggehalcyon.gitbook.io/page/ctfs/2023" />
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Landing