<template>
  <div style="text-align: left;">
    <div class="row">
      <div class="col-md-11 mx-auto">
        <div class="row">
          <div class="col-md-12 mb-2">
            Fields marked with
            <span class="text-danger">*</span>
            are required
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Title
                <span class="text-danger">*</span>
              </label>
              <select v-model="model.title" v-validate="'required'" class="form-control">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
                <option>Dr.</option>
                <option>Other.</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Gender
                <span class="text-danger">*</span>
              </label>
              <select v-model="model.gender" class="form-control">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                BVN
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name="bvn"
                v-model="model.bvn"
                v-validate="'required|digits:11'"
                class="form-control"
                placeholder="Bank Verification Number"
              >
              <span class="error">{{ errors.first('bvn') }}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Surname
                <span class="text-danger">*</span>
              </label>
              <input
                name="Surname"
                v-model="model.surname"
                type="text"
                v-validate="'required'"
                class="form-control"
                placeholder="Enter your surname"
                disabled
              >
              <span class="error">{{ errors.first('Surname') }}</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Firstname
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                v-model="model.first_name"
                name="Firstname"
                v-validate="'required'"
                class="form-control"
                placeholder="Enter your firstname"
                disabled
              >
              <span class="error">{{ errors.first('Firstname') }}</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Other Name
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                v-model="model.other_name"
                name="Othername"
                v-validate="'required'"
                class="form-control"
                placeholder="Enter your Othername"
              >
              <span class="error">{{ errors.first('Othername') }}</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Date Of Birth
                <span class="text-danger">*</span>
              </label>
              <input
                type="date"
                v-model="model.date_of_birth"
                name="Date of birth"
                v-validate="'required'"
                class="form-control"
              >
              <span class="error">{{ errors.first('Date of birth') }}</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Phone Number
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name="Phone"
                v-model="model.phone"
                v-validate="'required|digits:11'"
                class="form-control"
                placeholder="2348123456789"
                disabled
              >
              <span class="error">{{ errors.first('Phone') }}</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Marital Status
                <span class="text-danger">*</span>
              </label>
              <select v-model="model.marital_status" class="form-control">
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Complicated</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Employee / Business Owner
                <span class="text-danger">*</span>
              </label>
              <select
                v-model="model.employee_business_owner"
                name="Employee or Business owner"
                @change="validate"
                v-validate="'required'"
                class="form-control"
              >
                <option value="employee">Employee</option>
                <option value="business_owner">Business Owner</option>
              </select>
              <span class="error">{{ errors.first('Employee or Business owner') }}</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Email
                <span class="text-danger">*</span>
              </label>
              <input
                name="Email"
                v-model="model.email"
                type="email"
                v-validate="'required|email'"
                placeholder="Enter you email"
                class="form-control"
                disabled
              >
              <span class="error">{{ errors.first('Email') }}</span>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                Highest Educational Level
                <span class="text-danger">*</span>
              </label>
              <select
                v-model="model.highest_education_level"
                name="highest_education_level"
                v-validate="'required'"
                class="form-control"
              >
                <option>SSCE</option>
                <option>OND</option>
                <option>HND</option>
                <option>BSc.</option>
                <option>Masters, PhD</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="label">
                LGA of Residential Address
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name="LGA of Residential Address"
                v-model="model.lga_of_residential_address"
                v-validate="'required'"
                class="form-control"
                placeholder="Enter your residential address"
              >
              <span class="error">{{ errors.first('LGA of Residential Address') }}</span>
            </div>
          </div>
          <div class="col-md-8">
            <div class="form-group">
              <label class="label">
                Residential Address
                <span class="text-danger">*</span>
              </label>
              <input
                type="text"
                name="Residential Address"
                v-model="model.residential_address"
                v-validate="'required'"
                class="form-control"
                placeholder="Enter your residential address"
              >
              <span class="error">{{ errors.first('Residential Address') }}</span>
            </div>
          </div>
        </div>



        <hr>

        <div class="row">
          <div class="col-md-12">
            <h5>Next Of Kin</h5>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="label">
                    Firstname
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="Firstname"
                    v-model="model.n_first_name"
                    v-validate="'required'"
                    class="form-control"
                    placeholder="Enter Firstame"
                  >
                  <span class="error">{{ errors.first('firstname') }}</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="label">
                    Lastname
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="Lastname"
                    v-model="model.n_last_name"
                    v-validate="'required'"
                    class="form-control"
                    placeholder="Enter Lastame"
                  >
                  <span class="error">{{ errors.first('Lastname') }}</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="label">
                    Phone
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="Phone"
                    v-model="model.n_phone"
                    v-validate="'required|digits:11'"
                    class="form-control"
                    placeholder="Enter Phone Number"
                  >
                  <span class="error">{{ errors.first('Phone') }}</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="label">
                    Relationship
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="Relationship"
                    class="form-control"
                    v-validate="'required'"
                    v-model="model.n_relationship"
                    placeholder="Enter Relationship"
                  >
                  <span class="error">{{ errors.first('Relationship') }}</span>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label class="label">
                    House Address
                    <span class="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="House Address"
                    v-model="model.n_home_address"
                    v-validate="'required'"
                    class="form-control"
                    placeholder="Enter House Address"
                  >
                  <span class="error">{{ errors.first('House Address') }}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepOne",
  props: {
      loggedInUser: {
        type: Object
      },
      loggedInUserFormProgress: {
        type: Object
      }
  },
  data() {
    return {
      userDetails: {},
      model: {
        title: "Mr.",
        gender: "Male",
        surname: "",
        first_name: "", //this.$store.state.auth.user.user.first_name,
        other_name: "",
        date_of_birth: "",
        phone: "",
        marital_status: "Single",
        email: "",
        highest_education_level: "SSCE",
        employee_business_owner: "",
        n_last_name: "",
        n_first_name: "",
        n_relationship: "",
        n_home_address: "",
        n_phone: "",
        residential_address: "",
          bvn : "",
        lga_of_residential_address: "",
        agree_to_terms_and_conditions: true
      }
    };
  },
  methods: {
    validate() {
      return this.$validator.validate().then(valid => {
        if (valid) {
          this.$emit("on-validate", valid, this.model);
          this.$emit(
            "employee_business_owner",
            this.model.employee_business_owner
          );
          return true;
        } else {
          return false;
        }
      });
    },
    populateUserInfo() {
      let authUser = this.$store.state.auth.user.user;
        let formProgress = this.$store.state.users.formDataProgress;

      this.model.first_name = authUser.first_name;
      this.model.surname = authUser.last_name;
      this.model.email = authUser.email;
      this.model.phone = authUser.phone;
        if (formProgress) {
            //get key of formProgress object
            for (const key of Object.keys(this.model)) {
                // if key exist in model object
                if (key in formProgress) {
                    // compare the two key and get the values
                    this.model[key] = formProgress[key];
                }
            }
        }
      // this.model.other_name = formProgress && formProgress.other_name;
      // this.model.date_of_birth = formProgress && formProgress.date_of_birth;
      // this.model.marital_status = formProgress && formProgress.marital_status;
      // this.model.highest_education_level = formProgress && formProgress.highest_education_level;
      // this.model.employee_business_owner = formProgress && formProgress.employee_business_owner;
      // this.model.n_last_name = formProgress && formProgress.n_last_name;
      // this.model.n_first_name = formProgress && formProgress.n_first_name;
      // this.model.n_relationship = formProgress && formProgress.n_relationship;
      // this.model.n_home_address = formProgress && formProgress.n_home_address;
      // this.model.n_phone = formProgress && formProgress.n_phone;
      // this.model.residential_address = formProgress && formProgress.residential_address;
      // this.model.lga_of_residential_address = formProgress && formProgress.lga_of_residential_address;
    }
  },
  created() {
    console.log(this.$store.state.auth.user.user);
    this.populateUserInfo();
  }
};
</script>
