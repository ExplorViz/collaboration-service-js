import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SpectateConfigsService } from './persistence/spectateConfiguration/spectateConfig.service';

async function bootstrap() {
  const port = parseInt(process.env.NEST_APPLICATION_PORT || '4444');
  const app = await NestFactory.create(AppModule);

  const spectateConfigService = app.get(SpectateConfigsService);

  const data = await spectateConfigService.getAllConfigs();
  if (data.length === 0) {
    initialData.forEach(async (config) => {
      console.log(config);
      await spectateConfigService.create({
        id: config.id,
        devices: config.devices,
      });
    });
  }

  app.enableCors();
  await app.listen(port);
  console.log(await app.getUrl());
}
bootstrap();

const initialData = [
  {
    id: 'default',
    devices: [],
  },
  {
    id: 'arena-2',
    devices: [
      {
        deviceId: 'main',
        projectionMatrix: [
          0.647540107130474, 0, 0, 0, 0, 1.3032253728412058, 0, 0, 0, 0,
          -1.002002002002002, -1, 0, 0, -0.20020020020020018, 0,
        ],
      },
      {
        deviceId: 'projector01',
        projectionMatrix: [
          0.37414815376221466, -0.37519828389783655, 0.5581887688326659,
          0.5570735065572759, 0.3379969734159119, 0.6304082269470628,
          -0.21676647323855214, -0.21633337339192177, 0.16875717040274624,
          -0.4307747477394816, -0.8033962947666691, -0.801791107364538, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
      {
        deviceId: 'projector02',
        projectionMatrix: [
          0.37708948956444993, 0.4126607362255049, -0.5126365241416729,
          -0.5116122753421891, -0.3416245879788447, 0.6324515753299836,
          -0.18618005573532626, -0.18580806761197893, -0.15430838430260382,
          -0.3917543607582903, -0.84056456800079, -0.8388851183144748, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
      {
        deviceId: 'projector03',
        projectionMatrix: [
          -0.3807154385572838, 0.3614659448720385, -0.5549796372863046,
          -0.5538707868621562, -0.3401302242065162, -0.06956246521619985,
          0.7657931905498718, 0.7642631342250968, -0.14857667935847096,
          -0.7669801837487358, -0.33100816231783375, -0.3303468073481677, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
      {
        deviceId: 'projector04',
        projectionMatrix: [
          -0.3860850914638034, -0.3696235382071114, 0.533953554582419,
          0.5328867143135231, 0.3394399900415796, -0.11761999427269876,
          0.7587003754294743, 0.7571844905634815, 0.13574475877097025,
          -0.7571652032964679, -0.3785173098921564, -0.37776103155071344, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
      {
        deviceId: 'projector05',
        projectionMatrix: [
          0.5209364537039562, 0.16550211223958758, -0.04744366706329577,
          -0.04734887452171077, -0.07930785126025934, 0.7375437786335443,
          0.4765114640178161, 0.47555939316063767, -0.07101633723768289,
          0.3903759643928195, -0.8801669927526282, -0.8784084173425332, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
    ],
  },
  {
    id: 'fhd-monitors',
    devices: [
      {
        deviceId: 'main',
        projectionMatrix: [
          1.3032253728412058, 0, 0, 0, 0, 2.3168451072732545, 0, 0,
          0.6187499999999999, 0, -1.002002002002002, -1, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
      {
        deviceId: 'portraitMonitor',
        projectionMatrix: [
          2.3168451072732545, 0, 0, 0, 0, 1.3032253728412058, 0, 0,
          -1.8777777777777778, 0, -1.002002002002002, -1, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
      {
        deviceId: 'landscapeMonitor',
        projectionMatrix: [
          1.3032253728412058, 0, 0, 0, 0, 2.3168451072732545, 0, 0,
          0.6187499999999999, 0, -1.002002002002002, -1, 0, 0,
          -0.20020020020020018, 0,
        ],
      },
    ],
  },
];
