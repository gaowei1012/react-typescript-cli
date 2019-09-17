// interface 定义接口
interface HomeInterface {
  lebal: string;
  username?: string; // 可选参数
  password?: string; // 可选参数
  icon?: string;
  readonly name: string; // 只读参数
  readonly file: string; // 只读参数
}

function Home(lebal: HomeInterface) {
  // todo
}
