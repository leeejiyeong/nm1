package co.nambaone.prj.user.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.nambaone.prj.common.Command;

public class MyPage implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		
		return "user/myPage.tiles";
	}

}
