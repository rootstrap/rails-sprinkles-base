class ClocksControllerTest < ActionDispatch::IntegrationTest
  test 'assert_clock_component' do
    get "/"
    assert_equal 200, response.status

    # or just assert component rendered
    assert_react_component "Clock"
  end
end
