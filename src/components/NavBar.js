import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from "reactstrap";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const [filterState, setFilterState] = useState({
    // lauchDate
    newest: false,
    oldest: false,

    // launchStatus
    success: false,
    failed: false,

    // upcoming
    upcoming: false,
  });

  const toggle = () => setIsOpen(!isOpen);

  const activateFilter = (e) => {
    setFilterState((prevState) => ({
      ...prevState,
      [e.target.name]: !prevState[e.target.name],
    }));
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">flightapp</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Launch Date
              </DropdownToggle>

              <DropdownMenu right>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Input
                        addon
                        id="newest"
                        name="newest"
                        checked={filterState.newest}
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        onChange={activateFilter}
                        disabled={filterState.oldest}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Label for="newest" sm={2}>
                    Newest
                  </Label>
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Input
                        addon
                        id="oldest"
                        name="oldest"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        checked={filterState.oldest}
                        onChange={activateFilter}
                        disabled={filterState.newest}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Label for="oldest" sm={2}>
                    Oldest
                  </Label>
                </InputGroup>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Launch Status
              </DropdownToggle>
              <DropdownMenu right>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Input
                        addon
                        id="success"
                        name="success"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        checked={filterState.success}
                        onChange={activateFilter}
                        disabled={filterState.failed}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Label for="success" sm={2}>
                    Success
                  </Label>
                </InputGroup>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Input
                        addon
                        id="failed"
                        name="failed"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        checked={filterState.failed}
                        onChange={activateFilter}
                        disabled={filterState.success}
                      />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Label for="failed" sm={2}>
                    Failed
                  </Label>
                </InputGroup>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Upcoming
              </DropdownToggle>
              <DropdownMenu right>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <Input
                        addon
                        id="upcoming"
                        name="upcoming"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        checked={filterState.upcoming}
                        onChange={activateFilter}
                      />
                    </InputGroupText>
                  </InputGroupAddon>

                  <Label for="upcoming" sm={2}>
                    Upcoming
                  </Label>
                </InputGroup>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
