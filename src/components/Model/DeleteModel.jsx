import { Button, Grid, Modal, ModalClose, Sheet, Typography } from "@mui/joy";

export default function DeleteModel({ open,close,title,description,cancel,final,final_title }){
    return(
        <>
        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
          open={open}
          onClose={close}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 500,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
            }}
          >
            <ModalClose
              variant="outlined"
              sx={{
                top: "calc(-1/4 * var(--IconButton-size))",
                right: "calc(-1/4 * var(--IconButton-size))",
                boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                borderRadius: "50%",
                bgcolor: "background.body",
              }}
            />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              {title}
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary">
              {description}
            </Typography>

            <Grid container marginTop={1} spacing={1}>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  variant="solid"
                  color="success"
                  onClick={close}
                >
                  {cancel}
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  fullWidth
                  variant="solid"
                  color="danger"
                  onClick={final}
                >
                  {final_title}
                </Button>
              </Grid>
            </Grid>
          </Sheet>
        </Modal>
        </>
    )
}