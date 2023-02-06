import { useState, Fragment } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Link,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/joy";

export function TOPAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Grid container>
                <Grid item>
                  <Link
                    href="/"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <img
                      alt=""
                      src="/Images/dashboard.png"
                      width="40"
                      height="40"
                      // className="d-inline-block align-center"
                    />
                  </Link>
                </Grid>
                <Grid item marginLeft={2} marginTop={1}>
                  <Link
                    href="/"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <Typography>Dashboard</Typography>
                  </Link>
                </Grid>
              </Grid>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Grid container>
                <Grid item>
                  <Link
                    href="/business-location"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <img
                      alt=""
                      src="/Images/warehouse.png"
                      width="40"
                      height="40"
                      // className="d-inline-block align-center"
                    />
                  </Link>
                </Grid>
                <Grid item marginLeft={2} marginTop={1}>
                  <Link
                    href="/business-location"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <Typography>Warehouse</Typography>
                  </Link>
                </Grid>
              </Grid>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Grid container>
                <Grid item>
                  <Link
                    href="/crm"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <img alt="" src="/Images/crm.png" width="40" height="40" />
                  </Link>
                </Grid>
                <Grid item marginLeft={2} marginTop={1}>
                  <Link
                    href="/crm"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <Typography>CRM</Typography>
                  </Link>
                </Grid>
              </Grid>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Grid container>
                <Grid item>
                  <Link
                    href="#"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <img alt="" src="/Images/hr.png" width="40" height="40" />
                  </Link>
                </Grid>
                <Grid item marginLeft={2} marginTop={1}>
                  <Link
                    href="#"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                  >
                    <Typography>HR</Typography>
                  </Link>
                </Grid>
              </Grid>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Grid container>
                <Grid item>
                  <Link
                    href="#"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                    component={"button"}
                    onClick={handleClick}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <img
                      alt=""
                      src="/Images/inventory.png"
                      width="40"
                      height="40"
                    />
                  </Link>
                </Grid>
                <Grid item marginLeft={2} marginTop={1}>
                  <Link
                    href="#"
                    style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                    component={"button"}
                    onClick={handleClick}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Typography>Inventory</Typography>
                  </Link>
                </Grid>
              </Grid>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Link
                  href="/inventory/product"
                  style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}> Inventory</MenuItem>
                </Link>
                <Link
                  href="/inventory/inward-outward"
                  style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Inward - Outward</MenuItem>
                </Link>
                <Link
                  href="/inventory/product-category"
                  style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Category Management</MenuItem>
                </Link>
                <Link
                  href="/vendor"
                  style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Vendor Management</MenuItem>
                </Link>
                <Link
                  href="/inventory/purchase-order"
                  style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Purchase Orders</MenuItem>
                </Link>
                <Link
                  href="/inventory/material-request"
                  style={{ color: "rgba(0,0,0,.9)", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>Material Requests</MenuItem>
                </Link>
              </Menu>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: "80px",
          paddingTop: "8px",
          background: "white",
          marginBottom: "15px",
        }}
      >
        <Container style={{ maxWidth: "100%" }}>
          <Toolbar disableGutters variant="dense" style={{ width: "100%" }}>
            {/* MOBILEVIEW */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <div>
                {["left"].map((anchor) => (
                  <Fragment key={anchor}>
                    <IconButton
                      onClick={toggleDrawer(anchor, true)}
                      sx={{ color: "black" }}
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </Fragment>
                ))}
              </div>
            </Box>

            {/* DESKTOPVIEW */}
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              style={{ width: "100%" }}
            >
              <Stack direction="row" style={{ width: "100%" }}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  style={{ width: "100%" }}
                  sx={{ justifyContent: { xs: "center" } }}
                >
                  <img
                    src="/Images/toplogo.png"
                    height="65"
                    width="110"
                    alt="top-india-elevator"
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  />
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    marginLeft={2}
                    sx={{
                      flexGrow: 1,
                      display: { xs: "none", md: "flex", lg: "flex" },
                    }}
                  >
                    <Grid item>
                      <Link
                        href="/"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          alt=""
                          src="/Images/dashboard.png"
                          width="40"
                          height="40"
                          className="d-inline-block align-center"
                        />
                      </Link>
                    </Grid>
                    <Grid item marginLeft={1} marginRight={2}>
                      <Link
                        href="/"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <Typography>Dashboard</Typography>
                      </Link>
                    </Grid>
                    <Grid item marginLeft={1}>
                      <Link
                        href="/business-location"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          alt=""
                          src="/Images/warehouse.png"
                          width="40"
                          height="40"
                          // className="d-inline-block align-center"
                        />
                      </Link>
                    </Grid>

                    <Grid item marginLeft={1} marginRight={2}>
                      <Link
                        href="/business-location"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <Typography>Warehouse</Typography>
                      </Link>
                    </Grid>
                    <Grid item marginLeft={1}>
                      <Link
                        href="/crm"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          alt=""
                          src="/Images/crm.png"
                          width="40"
                          height="40"
                        />
                      </Link>
                    </Grid>
                    <Grid item marginLeft={1} marginRight={2}>
                      <Link
                        href="/crm"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <Typography>CRM</Typography>
                      </Link>
                    </Grid>

                    <Grid item marginLeft={1}>
                      <Link
                        href="#"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <img
                          alt=""
                          src="/Images/hr.png"
                          width="40"
                          height="40"
                        />
                      </Link>
                    </Grid>
                    <Grid item marginLeft={1} marginRight={2}>
                      <Link
                        href="#"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <Typography>HR</Typography>
                      </Link>
                    </Grid>

                    <Grid item marginLeft={1}>
                      <Link
                        href="#"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                        component={"button"}
                        onClick={handleClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <img
                          alt=""
                          src="/Images/inventory.png"
                          width="40"
                          height="40"
                        />
                      </Link>
                    </Grid>
                    <Grid item marginLeft={1} marginRight={2}>
                      <Link
                        href="#"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                        component={"button"}
                        onClick={handleClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                      >
                        <Typography>Inventory</Typography>
                      </Link>
                    </Grid>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Link
                        href="/inventory/product"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <MenuItem onClick={handleClose}>Inventory</MenuItem>
                      </Link>
                      <Link
                        href="/inventory/inward-outward"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          Inward - Outward
                        </MenuItem>
                      </Link>
                      <Link
                        href="/inventory/product-category"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          Category Management
                        </MenuItem>
                      </Link>
                      <Link
                        href="/vendor"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          Vendor Management
                        </MenuItem>
                      </Link>
                      <Link
                        href="/inventory/purchase-order"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          Purchase Orders
                        </MenuItem>
                      </Link>
                      <Link
                        href="/inventory/material-request"
                        style={{
                          color: "rgba(0,0,0,.9)",
                          textDecoration: "none",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          Material Requests
                        </MenuItem>
                      </Link>
                    </Menu>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="row">
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Profiles">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/Images/profile.png" />
                    </IconButton>
                  </Tooltip>

                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Link
                      href="#"
                      style={{
                        color: "rgba(0,0,0,.9)",
                        textDecoration: "none",
                      }}
                    >
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                    </Link>
                    <Link
                      href="/business-setting"
                      style={{
                        color: "rgba(0,0,0,.9)",
                        textDecoration: "none",
                      }}
                    >
                      <MenuItem onClick={handleClose}>
                        Business Settings
                      </MenuItem>
                    </Link>
                    <Link
                      href="/login"
                      style={{
                        color: "rgba(0,0,0,.9)",
                        textDecoration: "none",
                      }}
                    >
                      <MenuItem
                        // onClick={handleClose}
                        onClick={() => {
                          localStorage.clear();
                          navigate("/login");
                          // window.location.reload();
                        }}
                      >
                        Logout
                      </MenuItem>
                    </Link>
                  </Menu>
                </Box>
              </Stack>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
