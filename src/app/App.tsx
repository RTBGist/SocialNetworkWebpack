import {Suspense} from "react";
import {classNames} from "shared/lib/className/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import './styles/index.scss';
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
	const { theme } = useTheme();

	return (
			<div className={classNames('app', {}, [theme])}>
				<Suspense>
					<Navbar />
					<div className='content-page'>
						<Sidebar />
						<AppRouter />
					</div>
				</Suspense>

			</div>
	);
};

export default App;