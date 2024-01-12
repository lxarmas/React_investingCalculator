import logo from '../assets/money.jpg';
export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt="logo money in a bag" />
            <h1> Ale's Investing Money Machine</h1>
        </header>
    )
}