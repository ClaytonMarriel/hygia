import React  from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";
import api from "services/api";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function NewUser({history}) {


  const classes = useStyles();

  //States
    const [usernameInput, setUserInput] = React.useState('');
    const [emailInput, setEmailInput] = React.useState('');
    const [firstNameInput, setFirstNameInput] = React.useState('')
    const [lastNameInput, setLastNameInput] = React.useState('')
    const [cityInput, setCityInput] = React.useState('')
    const [countryInput, setCountryInput] = React.useState('')
    const [postalCodeInput, setPostalCodeInput] = React.useState('')
    
    const [errors, setErrors] = React.useState('')

    //Validação do inputName/email
    function validate(){
      let errors ={}
      if(!usernameInput, !emailInput){
        errors.usernameInput = "Fill this field"
      }
      return errors
    }

    async function handleSubmit(){

      const response = await api.post('users', {
        username: usernameInput,
        email: emailInput,
        lastname: lastNameInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        city: cityInput,
        country: countryInput,
        postalCode: postalCodeInput,
        
      })
      setErrors(validate(usernameInput))
      history.push('/dashboard')

    }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Register new Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                  required
                    labelText="Username"
                    id="username"   
                    inputProps={{
                      value: usernameInput,
                      onChange: (event) => setUserInput(event.target.value),
                    }} 
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  {errors.usernameInput && <p className="error-input">{errors.usernameInput}</p>}
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                  type="email"
                    labelText="Email address"
                    id="email-address"
                    inputProps={{
                      value: emailInput,
                      onChange: (event) => setEmailInput(event.target.value),
                      
                    }} 
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  {errors.usernameInput && <p className="error-input">{errors.usernameInput}</p>}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    inputProps={{
                      value: firstNameInput,
                      onChange: (event) => setFirstNameInput(event.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    inputProps={{
                      value: lastNameInput,
                      onChange: (event)=>setLastNameInput(event.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    inputProps={{
                      value: cityInput,
                      onChange: (event)=>setCityInput(event.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    inputProps={{
                      value: countryInput,
                      onChange:(event)=>setCountryInput(event.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    inputProps={{
                      value:postalCodeInput,
                      onChange:(event)=>setPostalCodeInput(event.target.value)
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button 
              color="primary"
              onClick={handleSubmit}
              
              >
                Register Profile
                </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );

}
