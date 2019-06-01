<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent  title="Random titmle" type="success" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="/img/brand/tmbrand.png" alt="logo" class="img-fluid">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="">
                        <img src="img/brand/blue.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                        <li class="nav-item">
                            <router-link to="/tmlanding" class="nav-link"  role="button">
                              <i class="ni ni-ui-04 d-lg-none"></i>
                              <span class="nav-link-inner--text">Home</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link"  role="button">
                              <i class="ni ni-ui-04 d-lg-none"></i>
                              <span class="nav-link-inner--text">About</span>
                            </router-link>
                        </li>
                        
            </ul>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Browse</span>
                    </a>
                    <router-link to="/landing#view_assessment" class="dropdown-item">View Assessment</router-link>
                    <router-link to="/landing" class="dropdown-item">View Dataset</router-link>
                    <router-link to="/landing#predict_sequences" class="dropdown-item">Predict Topology</router-link>
                </base-dropdown>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Gitlab
                       ">
                        <i class="fa fa-gitlab"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <router-link to="/downloads">
                        <span class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon">
                            <i class="fa fa-cloud-download mr-2"></i>
                            </span>
                            <span class="nav-link-inner--text">Download Dataset</span>
                        </span>
                    </router-link>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
.navbar-main{
    position: fixed !important;
    padding: 0px !important;
    height: 60px !important;  
    line-height: 1 !important;
}
.container{
    padding: 0px 24px 0px 24px !important;
}

.nav-link{
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}

.img-fluid{
    max-height: 100%;
    width:auto;
}

</style>
