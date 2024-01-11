import logo from '../assets/investment-calculator-logo.png';
export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt="logo money in a bag" />
            <h1>Investing Calculator</h1>
        </header>
    )
}