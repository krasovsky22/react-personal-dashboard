import React, { Component } from 'react'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

class Header extends Component {
  state = {
    isOpen: false
  }

  constructor (props) {
    super(props)
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    const { openSidebar } = this.props

    return (
      <Navbar color="light" expand="md" color="faded" light>
        <Container fluid>
          <div className="navbar-header">
            <NavbarBrand href="/">Reactstrap</NavbarBrand>
          </div>
          <NavbarToggler onClick={openSidebar} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/krasovsky22/react-personal-dashboard">GitHub</NavLink>
              </NavItem>
              <Dropdown isOpen={this.state.isOpen} nav inNavbar toggle={this.toggle}>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/logout">Logout</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header
