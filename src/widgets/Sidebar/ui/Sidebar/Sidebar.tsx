import {useState} from "react";
import * as cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/className/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";


interface SidebarProps {
	className?: string
}

export const Sidebar = (props: SidebarProps) => {
	const { className } = props;
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
			<div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
				<button onClick={onToggle}>toggle</button>
				<div className={cls.switchers}>
					<ThemeSwitcher />
				</div>
			</div>
	);
};