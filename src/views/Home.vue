<template>
  <div class="home-page">
    <div class="user">
      <div class="user__img mr-2">
        <i class='bx bxl-dribbble'></i>
      </div>

      <div class="user__name">
        Client 1
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-xl-4 col-lg-6 col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-header__title">
              Total of the prices
            </div>
            <div class="card-header__info card-header__info--red">
              -25.1%
            </div>
          </div>

          <div class="card-body">
              <div class="card-body__amount">
                $10,500,000
              </div>
              <div class="progress">
                <div 
                  class="progress-bar" role="progressbar" 
                  style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                ></div>
              </div>
          </div>

          <div class="card-footer">
            Over initial contract with <span>$500,00</span>
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-4 col-lg-6 col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-header__title">
              Total of the prices
            </div>
            <div class="card-header__info card-header__info--green">
              15%
            </div>
          </div>

          <div class="card-body">
              <div class="card-body__amount">
                $6,200,00
              </div>
              <div class="progress">
                <div 
                  class="progress-bar" role="progressbar" 
                  style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                ></div>
              </div>
          </div>

          <div class="card-footer">
            Over initial contract with <span>$500,00</span>
          </div>
        </div>       
      </div>
      <div class="col-12 col-xl-4 col-lg-6 col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="card-header__title">
              Total of the prices
            </div>
            <div class="card-header__info card-header__info--green">
              20%
            </div>
          </div>

          <div class="card-body">
              <div class="card-body__amount">
                $10,500,000
              </div>
              <div class="progress">
                <div 
                  class="progress-bar" role="progressbar" 
                  style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                ></div>
              </div>
          </div>

          <div class="card-footer">
            Over initial contract with <span>$500,00</span>
          </div>
        </div>   
      </div>
    </div>

  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  &__img {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, .15);

    i {
      font-size: 24px;
      color: red;
      background: purple;
      border-radius: 50%;
    }
  }

  &__name {
    font-size: 24px;
    font-weight: 500;
    color: #647dee;
  }
}

.card {
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 14px;

  .card-header {
    background: none;
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__info {
      padding: 4px 8px;
      border-radius: 6px;

      &--green {
        background: rgba(0, 255, 0, 0.05);
        color: green;
      }

      &--red {
        background: rgba(255, 0, 0, 0.05);
        color: red;
      }
    }
  }

  .card-body {
    padding-top: 0;
    padding-bottom: 0;
    &__amount {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 600;
    }
  }

  .card-footer {
    background: none;
    border: none;
    font-size: 14px;
    color: lightgray;

    span {
      color: #444;
      font-weight: 500;
    }
  }
}

.progress {
  height: 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}

</style>