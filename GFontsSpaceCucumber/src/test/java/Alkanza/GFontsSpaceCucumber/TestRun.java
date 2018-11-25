package Alkanza.GFontsSpaceCucumber;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "features",
		glue = {"Alkanza.GFontsSpaceCucumber.Steps"},
		tags = {"@tag001, @tag002 , @tag003"},
		plugin = {"html:reportes/cucumber-html-report"})

public class TestRun {

	public TestRun() {}

}
