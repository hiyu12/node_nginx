import {
  Divider,
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Avatar,
  Box,
} from "@material-ui/core";
import image from "../../assets/images/backgrounds/user-info.png";
import Rating from "@mui/material/Rating";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "auto",
    width: "auto",
  },
  media: {
    height: 250,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
  },
});
const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];
const InfoCards = (props) => {
  const classes = useStyles();
  return (
    // <div style={{ backgroundImage: `url(` + image + `)` }}>
    <Card>
      <CardMedia className={classes.media} image={props.image} />
      <CardContent>
        <Typography variant={"h4"} gutterBottom>
          {props.title}
        </Typography>
        <Typography variant={"caption"}>{props.description}</Typography>
      </CardContent>
      <Divider light />
      <Box p={2}>
        <h4 style={{ fontWeight: "bold" }}>Price:${props.price}</h4>
      </Box>
      <Divider light />
      <Rating
        name="read-only"
        defaultValue={props.rate}
        readOnly
        size="large"
      />
      <Divider light />
      <Box p={2}>
        {faces.map((face) => (
          <Avatar
            className={classes.avatar}
            key={face}
            src={face}
            variant="square"
          />
        ))}
      </Box>
    </Card>
    // </div>
  );
};

export default InfoCards;
