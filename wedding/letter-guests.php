<?php include 'builder-header.php'; ?>
    
<?php include 'menu.php'; ?>

			<section class="builder9">
        <div class="container">

          <h2 class="section-title invitation__title wow fadeInUp">Письмо гостям</h2>
          <!-- /.section-title -->
          <div class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales <br>
              nisl a scelerisque cursus. 
          </div>
          <!-- /.section-subtitle -->
          <div class="row justify-content-center align-items-start">
            <div class="col-0 col-xl-4 d-flex justify-content-center">
              <div class="signature">
                <img src="img/section9/main-img.jpeg" alt="#">
              </div>
            </div>
            <!-- /.col-4 -->
            <div class="col-12 col-xl-8">
              <div class="about-us-block letter-block">
                <div class="about-us-block__title letter-block__title">
                  1. Заранее сообщайте, придете вы или нет
                </div>
                <!-- /.about-us-block__title -->
                <div class="about-us-block__descr letter-block__descr">
                  Для нас важно заранее знать список гостей, чтобы утвердить меню и площадку, а также составить программу вечера. Если у вас могут измениться планы, сообщите об этом заранее. Мы очень хотим видеть вас на нашей свадьбе, поэтому, пожалуйста, не тяните с ответом.
                </div>
                <!-- /.about-us-block__descr -->
              </div>
              <!-- /.about-us-block -->
              <div class="about-us-block letter-block">
                <div class="about-us-block__title letter-block__title">
                  2. Vestibulum ante ipsum primis in faucibus
                </div>
                <!-- /.about-us-block__title -->
                <div class="about-us-block__descr letter-block__descr">
                  Пожалуйста, учитывайте наши пожелания к дресс-коду. Не приходите в повседневной одежде, ведь это праздник. Если мы обозначили конкретные требования к тому, как должны выглядеть гости, значит этого требует формат нашего торжества. Пожалуйста, отнеситесь к нему с уважением. К тому же, это отличный повод надеть что-то праздничное!
                </div>
                <!-- /.about-us-block__descr -->
              </div>
              <!-- /.about-us-block -->
              <div class="about-us-block letter-block">
                <div class="about-us-block__title letter-block__title">
                  3. Во время церемонии выключите телефон
                </div>
                <!-- /.about-us-block__title -->
                <div class="about-us-block__descr letter-block__descr">
                  Либо, чтобы фотографировать, переведите его в режим полета. Нам бы очень не хотелось, чтобы в момент, когда мы произносим клятвы друг другу, у кого-то зазвонил телефон и нарушил всю атмосферу. Церемония длится всего 20 минут — вы всегда успеете перезвонить.
                </div>
                <!-- /.about-us-block__descr -->
              </div>
              <!-- /.about-us-block -->
              <div class="about-us-block letter-block">
                <div class="about-us-block__title letter-block__title">
                  4. Не привлекайте все внимание на себя
                </div>
                <!-- /.about-us-block__title -->
                <div class="about-us-block__descr letter-block__descr">
                  Чтобы праздник был комфортным для всех гостей, мы просим их одеться не слишком броско, соблюдать нормы приличия, не перебивать поздравления других, не кричать через весь зал что-то другому гостю или нам, не забирать микрофон у ведущего и так далее. Мы знаем, что вы не будете это делать, за это мы вас и любим!
                </div>
                <!-- /.about-us-block__descr -->
              </div>
              <!-- /.about-us-block -->
            </div>
            <!-- /.col-8 -->
            
          </div>
          <!-- /.row -->

          <form class="form-album form-signature">
            <div class="form-album-box">
              <label class="form-location__label" for="signature">
                Добавить требование:
              </label>
              <div class="form-album-input">
                <input class="form-album-box__text" type="text" name="text-input" id="signature" placeholder="Выберите фото с компьютера" required>
                <input type="file" class="hide inputfile form-album__btn button__big" id="upload" data-multiple-caption="{count} files selected" multiple />
                <label class="form-album__btn button__big" for="upload"><span>Обзор</span></label>
                <input class="form-album-box__text form-album-box__text-2" type="text" name="text-input" id="signature-photo" placeholder="Или просто перетащите фото сюда" required>
                <!-- <input class= "asdasdsad" type="file"" /> -->
               
              </div>
               <textarea class="form-box-text__signature form-box-text" placeholder="Заголовок требования" required></textarea>
                <textarea class="form-box-text__signature form-box-text__signature-2 form-box-text" placeholder="Описание требования" required></textarea>
              <button class="form-button__add button button__big">Сохранить</button>
            </div>
            <!-- /.form-album-box -->
          </form>
          <!-- /.form-album -->
			    <?php include 'button.php'; ?> 
      </section>
      <div class="js-overlay-order">
        <div class="popup js-order modal-popup">
        <!-- <div class="popup-close js-overlay-order-close">&times;</div> -->
         <!-- /.popup-close -->

        <div class="popup-form-header">
          Спасибо за обращение! <br>
          Наш консультант свяжется с Вами в течении 5 минут.
        </div> 
      </div>
      <!-- /.popup -->
    </div>
      <!-- /.builder9 -->
<?php include 'builder-footer.php'; ?>