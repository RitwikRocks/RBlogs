import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import IMG from '../mysellf.jpg';



const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <div className='mx-80 px-80 py-2'>
        <img src= {IMG} className="border-2 border-black object-fill h-80 w-64 hover:object-scale-up focus:ring focus:ring-violet-300" alt="pic" />
    </div>
            <Wrapper>
                <Typography variant="h3">Ritwik Ranjan Pathak</Typography>
                <Text variant="h5">I am Ritwik, currenlty pursuing BTECH from National Institute of Technology Jamshedpur.
                I enjoy coding and development.<br/>
                In this project I have used React Js, Redux Toolkit, React Router , Tailwind Css, Material Ui
                This project is in development and more features will be added soon. Till then enjoy the webiste.
                 <br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/RitwikRocks" color="inherit" ><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/ritwik_rocks" color="inherit">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:ritwikrocks26@gmail.com?Subject=This is a subject" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;