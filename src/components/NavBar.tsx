import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColormodeSwitch from './ColormodeSwitch';
import SearchInput from './SearchInput';


const NavBar = () => {
    return (
    <HStack  padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput/>
        <ColormodeSwitch/>
    </HStack>
    )
}

export default NavBar