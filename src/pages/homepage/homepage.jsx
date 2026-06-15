import { BottomBar } from '../../component/bottombar/bottombar'
import './homepage.css'
import { Home } from '../../component/home/home'
import { AboutMe } from '../../component/aboutme/aboutme'
import { Skills } from '../../component/skills/skills'
import { MiniProject } from '../../component/miniproject/miniproject'

import { ContactMe } from '../../component/contactme/contactme'

export function HomePage(){
    return(
        <div className='coverall-homepage'>
            
<BottomBar />
<Home/>
<AboutMe />

<Skills />
< MiniProject/>
<ContactMe />
        </div>
    )
}