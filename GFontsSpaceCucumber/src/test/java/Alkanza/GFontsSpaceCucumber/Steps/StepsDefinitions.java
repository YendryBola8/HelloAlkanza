package Alkanza.GFontsSpaceCucumber.Steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class StepsDefinitions {
	
	static WebDriver driver;

	@Given("^Open browser$")
	public void open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "resource/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	    driver.get("https://pankajladhar.github.io/GFontsSpace/");
	}

	@When("^Enter a text \"([^\"]*)\"$")
	public void enter_a_text(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/div/div/div/div/div/textarea")).clear();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/div/div/div/div/div/textarea")).sendKeys(arg1);
	}

	@Then("^Change the color of the text$")
	public void change_the_color_of_the_text() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section[2]/div/div[3]/div[2]/div/div/div")).click();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section[2]/div/div[3]/div[2]/div/div[2]/div/div/div/div")).click();
	}

	@Then("^Close browser$")
	public void close_browser() throws Throwable {
		driver.quit();
	}
	
	/*@Then("^Change text properties$")
	public void change_text_properties() throws Throwable {
	    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section[2]/div/div/div/span[2]/span")).click();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section[2]/div/div[2]/div/span[2]/span")).click();
	}*/

	@When("^Change the text size \"([^\"]*)\"$")
	public void change_the_text_size(String arg1) throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.name("quantity")).clear();
	    driver.findElement(By.name("quantity")).sendKeys(arg1);	    
	}

	@When("^Click on the compare button$")
	public void click_on_the_compare_button() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/div/div/div/div/div[2]/button")).click();
	}

	@When("^Enter a text$")
	public void enter_a_text() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/div/div/div[2]/div/div/textarea")).clear();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/div/div/div[2]/div/div/textarea")).sendKeys("In the previous chapter, we discussed the test scenario");
	}

	@Then("^Click on the classification buttons$")
	public void click_on_the_classification_buttons() throws Throwable {
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li")).click();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li[2]")).click();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li[3]")).click();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li[4]")).click();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li[5]")).click();
	    driver.findElement(By.xpath("//div[@id='root']/div/div/section/section/section/ul/li[6]")).click();
	}

	@Then("^Hide the control buttons$")
	public void hide_the_control_buttons() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/button")).click();
	}

	@Then("^Show control buttons$")
	public void show_control_buttons() throws Throwable {
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//div[@id='root']/div/div/section/button")).click();
	}
}
